import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'
import { prisma } from '@/lib/prisma'
import BookingReceivedEmail from '@/components/emails/BookingReceveidEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    console.log('Starting POST request handler')
    const body = await req.text()
    const signature = headers().get('stripe-signature')

    console.log('Received body:', body)
    console.log('Received signature:', signature)

    if (!signature) {
      console.log('Missing signature')
      return new Response('Invalid signature', { status: 400 })
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    console.log('Constructed Stripe event:', event)

    if (event.type === 'checkout.session.completed') {
      console.log('Checkout session completed event received')
      if (!event.data.object.customer_details?.email) {
        throw new Error('Missing user email')
      }

      const session = event.data.object as Stripe.Checkout.Session

      const { orderId } = session.metadata || { orderId: null }

      console.log('Order ID from session metadata:', orderId)

      if (!orderId) {
        throw new Error('Invalid request metadata')
      }

      const updatedOrder = await prisma.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
        },
      })

      console.log('Order updated successfully', updatedOrder)

      try {
        const emailResponse = await resend.emails.send({
          from: 'VillaEffroi <lavillaeffroi@gmail.com>',
          to: 'slaurent.26@gmail.com',
          subject: 'Thanks for your order!',
          react: BookingReceivedEmail(),
        })

        console.log('Email sent successfully', emailResponse)
      } catch (emailError) {
        console.error('Failed to send email', emailError)
        throw new Error('Email sending failed')
      }
    }

    return NextResponse.json({ result: event, ok: true })
  } catch (err) {
    console.error('Error handling POST request:', err)

    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    )
  }
}

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
    const body = await req.text()
    const signature = headers().get('stripe-signature')

    if (!signature) {
      return new Response('Invalid signature', { status: 400 })
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === 'checkout.session.completed') {
      if (!event.data.object.customer_details?.email) {
        throw new Error('Missing user email')
      }

      const session = event.data.object as Stripe.Checkout.Session
      const { orderId } = session.metadata || { orderId: null }

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
        include: {
          reservation: true,
        },
      })

      const reservationData = updatedOrder.reservation

      if (!reservationData) {
        throw new Error('Reservation not found')
      }

      // Récupérer les informations du créneau horaire
      const timeSlot = await prisma.timeSlot.findUnique({
        where: { id: reservationData.timeId || undefined },
      })

      if (!timeSlot) {
        throw new Error('Time slot not found')
      }

      // Ajouter les informations du créneau horaire aux données de la réservation
      const reservationWithTime = { ...reservationData, timeSlot }

      await resend.emails.send({
        from: "Villa Effroi <noreply@villaeffroi.info>",
        to: [event.data.object.customer_details.email],
        subject: 'Réservation confirmée',
        react: BookingReceivedEmail({ reservationData: reservationWithTime }), // Pass reservation with time data to the email component
      })
    }

    return NextResponse.json({ result: event, ok: true })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    )
  }
}

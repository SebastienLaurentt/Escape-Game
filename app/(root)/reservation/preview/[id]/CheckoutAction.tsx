"use server";

import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export const createCheckoutSession = async (
  id: string,
  userInfo: { name: string; email: string; phone: string }
) => {
  const reservation = await prisma.reservation.findUnique({
    where: { id },
    include: { Order: true }, // Include orders in the query
  });

  if (!reservation) {
    throw new Error("No such reservation found");
  }

  // Convert to cents for Stripe
  const price = parseFloat(reservation.price || "0") * 100;

  // Check if the order already exists using reservationId
  let order = await prisma.order.findFirst({
    where: { reservationId: reservation.id },
  });

  if (order) {
    // Update existing order with new user info
    order = await prisma.order.update({
      where: { id: order.id },
      data: {
        amount: price,
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
      },
    });
  } else {
    // Create new order with user info
    order = await prisma.order.create({
      data: {
        amount: price,
        reservationId: reservation.id,
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
      },
    });
  }

  const product = await stripe.products.create({
    name: "La Villa de l'Effroi",
    images: [
      "https://igppurftciumtqmwijea.supabase.co/storage/v1/object/public/images/images/Horror.jpg-1717198117087",
    ],
    default_price_data: {
      currency: "eur",
      unit_amount: price,
    },
  });

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you/${reservation.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/reservation/booking/${reservation.id}`,
    payment_method_types: ["card", "paypal"],
    mode: "payment",
    metadata: {
      orderId: order.id,
    },
    line_items: [{ price: product.default_price as string, quantity: 1 }],
  });

  return { url: stripeSession.url };
};

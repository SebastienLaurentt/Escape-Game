"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "./prisma";
import { supabase } from "./supabase";

// Schemas

// TimeSlot Schema type with Zod
const BookedSlotSchema = z.object({
  id: z.string().optional(),
  date: z.string().optional(),
  time: z.string().min(1),
});

// Experience schema type with Zod
const ExperienceSchema = z.object({
  name: z.string().min(5),
  image: z.any(),
  description: z.string().min(6),
  bookedSlots: z.array(BookedSlotSchema).optional(),
  duration: z.string().min(1),
  durationUnit: z.string().min(5),
  minPrice: z.string().min(2),
  minPeople: z.string().min(1),
  maxPeople: z.string().min(1),
});

// Reservation schema type with Zod
const ReservationsSchema = z.object({
  experienceId: z.string().optional(),
  bookedSlotId: z.string().optional(),
  people: z.string().optional(),
  price: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});

// Price schema type with Zod
const PriceSchema = z.object({
  id: z.string().optional(),
  people: z.string().min(1), 
  price: z.string().min(2), 
});

// Closed Day Schema type with Zod
const ClosedDaySchema = z.object({
  date: z.string(),
});

// Experience
// Read all experiences
export const getExperiencesList = async () => {
  try {
    const experiences = await prisma.experience.findMany({});
    return experiences;
  } catch (error) {
    throw new Error("Failed to fetch experiences data");
  }
};

// Find one experience by its ID
export const getExperienceById = async (id: string) => {
  try {
    const experience = await prisma.experience.findUnique({
      where: { id },
    });
    return experience;
  } catch (error) {
    throw new Error("Failed to fetch experience data");
  }
};

// Update an experience by its ID
export const updateExperience = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const validatedFields = ExperienceSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const {
      name,
      description,
      duration,
      durationUnit,
      minPrice,
      minPeople,
      maxPeople,
    } = validatedFields.data;

    let imagePath = formData.get("currentImageUrl") as string;
    const actualImageFile = formData.get("image") as File;

    if (actualImageFile && actualImageFile.size > 0) {
      const { data: imageData, error: uploadError } = await supabase.storage
        .from("images")
        .upload(
          `images/${actualImageFile?.name}-${Date.now()}`,
          actualImageFile,
          {
            cacheControl: "2592000",
            contentType: actualImageFile.type,
          }
        );

      if (uploadError) {
        throw new Error("Error uploading image");
      }

      imagePath = imageData.path;
    }

    await prisma.experience.update({
      data: {
        name,
        image: imagePath,
        description,
        duration,
        durationUnit,
        minPrice,
        minPeople,
        maxPeople,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Expérience mise à jour !" };
  }
  redirect(`/account/experiences`);
};

// Order
// Read all Orders
export const getOrdersList = async () => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        reservation: {
          include: {
            experience: {
              include: {
                bookedSlots: true,
              },
            },
            bookedSlot: true,
          },
        },
      },
    });

    return orders;
  } catch (error) {
    throw new Error("Failed to fetch orders data");
  }
};

// Delete Order
export const deleteOrder = async (id: string) => {
  try {
    // Find the order by its ID
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        reservation: {
          include: {
            experience: {
              select: {
                bookedSlots: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      console.error("Order not found", id);
      throw new Error("Order not found");
    }

    // Delete the order by its ID
    await prisma.order.delete({
      where: { id },
    });

    // Delete the reservation related to the order
    await prisma.reservation.delete({
      where: { id: order.reservationId },
    });

    // Delete the booked slot related to the order
    if (order.reservation.experience.bookedSlots.length > 0) {
      const bookedSlotId = order.reservation.experience.bookedSlots[0].id;
      await prisma.bookedSlot.delete({
        where: { id: bookedSlotId },
      });
    }
  } catch (error) {
    throw new Error("Failed to delete order data");
  }
  redirect("/account/reservations");
};

// Reservation
// Read all Reservations
export const getReservationsList = async () => {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        experience: {
          include: {
            bookedSlots: true,
          },
        },
      },
    });

    return reservations;
  } catch (error) {
    throw new Error("Failed to fetch reservations data");
  }
};

export const getReservationById = async (id: string) => {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id },
      include: {
        experience: {
          include: {
            bookedSlots: true,
          },
        },
        bookedSlot: true,
      },
    });

    if (!reservation) {
      throw new Error("Reservation not found");
    }

    return reservation;
  } catch (error) {
    throw new Error("Failed to fetch reservation data");
  }
};

export const updateReservation = async (id: string, formData: FormData) => {
  const validatedFields = ReservationsSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const date = formData.get("date") as string;
    const experienceId = formData.get("experienceId") as string;
    const time = formData.get("time") as string;

    // Create a new booked slot with the correct experience ID
    const createdTimeSlot = await prisma.bookedSlot.create({
      data: {
        time: time.toString(),
        date: new Date(date),
        experienceId: experienceId,
      },
    });

    // Update the reservation with the new data
    await prisma.reservation.update({
      data: {
        people: validatedFields.data.people,
        price: validatedFields.data.price,
        bookedSlotId: createdTimeSlot.id,
      },
      where: { id },
    });

    // Set the booked slot for the relevant experience Id
    await prisma.experience.update({
      data: {
        bookedSlots: {
          connect: { id: createdTimeSlot.id },
        },
      },
      where: { id: experienceId },
    });
  } catch (error) {
    console.error("Failed to update reservation:", error);
    return { message: "Failed to update reservation" };
  }

  // Redirect to the preview page
  redirect(`/reservation/preview/${id}`);
};

// Create Reservation
export const createReservation = async (prevState: any, formData: FormData) => {
  const validatedFields = ReservationsSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the input fields.",
    };
  }

  try {
    const newReservation = await prisma.reservation.create({
      data: {
        experienceId: validatedFields.data.experienceId || "",
      },
    });
    return { reservationId: newReservation.id };
  } catch (error) {
    return { message: "Failed to create new reservation", Error: error };
  }
};

export const deleteReservation = async (id: string) => {
  try {
    await prisma.reservation.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete reservation" };
  }

  redirect("/account/reservations");
};

// ClosedDay
// Create Closed Day
export const createClosedDay = async (prevSate: any, formData: FormData) => {
  const validatedFields = ClosedDaySchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.closedDay.create({
      data: {
        date: validatedFields.data.date,
      },
    });
  } catch (error) {
    return { message: "Failed to create new closedDay" };
  }

  redirect("/account/opening");
};

// Get ClosedDay list
export const getClosedDay = async () => {
  try {
    const closedDays = await prisma.closedDay.findMany({});
    return closedDays;
  } catch (error) {
    throw new Error("Failed to fetch closedDays data");
  }
};

export const deleteClosedDay = async (id: string) => {
  try {
    await prisma.closedDay.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete closed day" };
  }

  redirect("/account/opening");
};

// Price
// Get Price list
export const getPricesList = async () => {
  try {
    const prices = await prisma.price.findMany({
      orderBy: {
        people: 'asc' 
      }
    });
    return prices;
  } catch (error) {
    throw new Error("Failed to fetch prices data");
  }
};


// BookedSlot
// Get BookedSlots list
export const getBookedSlots = async () => {
  try {
    const BookedSlots = await prisma.bookedSlot.findMany({});
    return BookedSlots;
  } catch (error) {
    throw new Error("Failed to fetch BookedSlots data");
  }
};

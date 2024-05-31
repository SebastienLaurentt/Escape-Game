"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "./prisma";
import { supabase } from "./supabase";

// Schemas
// Experience schema type with Zod
const ExperienceSchema = z.object({
  name: z.string().min(5),
  image: z.any(),
  description: z.string().min(6),
  duration: z.string().min(1),
  durationUnit: z.string().min(5),
  minPrice: z.string().min(2),
  minPeople: z.string().min(1),
  maxPeople: z.string().min(0),
});

// Experience schema type with Zod
const ReservationsSchema = z.object({
  experienceName: z.string().optional(),
  people: z.string().optional(),
  date: z.string().optional(),
  price: z.string().optional(),
  timeId: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
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
  // Validate form data
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
      image,
      description,
      duration,
      durationUnit,
      minPrice,
      minPeople,
      maxPeople,
    } = validatedFields.data;

    // Extract the actual file from FormData
    const actualImageFile = formData.get("image") as File;

    // Convert the file to a string and upload the image to Supabase
    const { data: imageData, error: uploadError } = await supabase.storage
      .from("images")
      .upload(
        `images/${actualImageFile?.name}-${Date.now()}`,
        actualImageFile,
        {
          cacheControl: "2592000",
          contentType: "image/png",
        }
      );

    // Update the experience in the database
    await prisma.experience.update({
      data: {
        name,
        image: imageData?.path,
        description,
        duration,
        durationUnit,
        minPrice,
        minPeople,
        maxPeople,
      },
      where: { id },
    });

    // Revalidate and redirect
    redirect(`/account/experiences/${id}`);
  } catch (error) {
    return { message: "Expérience mise à jour !" };
  }
};

// Reservation
// Read all reservations
export const getReservationsList = async (query: string) => {
  try {
    const reservations = await prisma.reservation.findMany({});
    return reservations;
  } catch (error) {
    throw new Error("Failed to fetch reservations data");
  }
};

// Find one reservation by its ID
export const getReservationById = async (id: string) => {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id },
    });
    return reservation;
  } catch (error) {
    throw new Error("Failed to fetch reservation data");
  }
};

export const getReservationByIdWithTime = async (id: string) => {
  try {
    // Récupérer la réservation
    const reservation = await prisma.reservation.findUnique({
      where: { id },
    });

    if (!reservation) {
      throw new Error("Reservation not found");
    }

    // Récupérer le créneau horaire associé à l'ID de temps
    const timeSlot = await prisma.timeSlot.findUnique({
      where: { id: reservation.timeId || undefined }, // Add a default value of undefined for reservation.timeId
    });

    if (!timeSlot) {
      throw new Error("Time slot not found");
    }

    // Time Reservation
    const reservationWithTime = { ...reservation, timeSlot };

    return reservationWithTime;
  } catch (error) {
    throw new Error("Failed to fetch reservation data");
  }
};

export const updateReservation = async (
  id: string,
  formData: FormData
) => {
  const validatedFields = ReservationsSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    let timeId: string | null = formData.get("timeId") as string | null;

    // Create a new time slot if timeId is not provided
    if (timeId) {
      const createdTimeSlot = await prisma.timeSlot.create({
        data: {
          time: timeId.toString(), 
        },
      });
      
      // Assign the ID of the created time slot
      timeId = createdTimeSlot.id;
    }

    // Update the reservation with the new data and time slot ID
    await prisma.reservation.update({
      data: {
        people: validatedFields.data.people,
        date: validatedFields.data.date,
        price: validatedFields.data.price,
        timeId: timeId, 
      },
      where: { id },
    });
} catch (error) {
    return { message: "Failed to update reservation" };
}
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
        experienceName: validatedFields.data.experienceName || '', // Assign an empty string if experienceName is undefined
      },
    });
    return { reservationId: newReservation.id }; // Retourne l'ID de la réservation créée
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

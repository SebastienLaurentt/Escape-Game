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
  maxPeople: z.string().min(0),
});

// Reservation schema type with Zod
const ReservationsSchema = z.object({
  experienceId: z.string().optional(),
  people: z.string().optional(),
  price: z.string().optional(),
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
      },
      where: { id },
    });

    // Set the booked slot for the relevant experience Id
    await prisma.experience.update({
      data: {
        bookedSlots: {
          connect: { id: createdTimeSlot.id }
        },
      },
      where: { id: experienceId },
    });

  } catch (error) {
    console.error('Failed to update reservation:', error); 
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

// Get BookedSlots list
export const getBookedSlots = async () => {
  try {
    const BookedSlots = await prisma.bookedSlot.findMany({});
    return BookedSlots;
  } catch (error) {
    throw new Error("Failed to fetch BookedSlots data");
  }
};
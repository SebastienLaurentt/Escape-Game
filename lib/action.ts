"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "./prisma";

// Experience schema type with Zod
const ExperienceSchema = z.object({
  name: z.string().min(6),
  description: z.string().min(6),
  duration: z.string().min(1),
  durationUnit: z.string().min(5),
  minPrice: z.string().min(2),
  minPeople: z.string().min(1),
  maxPeople: z.string().min(0),
});

// Experience schema type with Zod
const ReservationsSchema = z.object({
  experienceId: z.string().min(0),
  people: z.string().min(0),
  date: z.string().min(0),
  price: z.string().min(0),
  time: z.string().min(0),
  name: z.string().min(0),
  email: z.string().min(0),
  phone: z.string().min(0),
});

// Closed Day Schema type with Zod
const ClosedDaySchema = z.object({
  date: z.string(),
});

// Read all experiences
export const getExperiencesList = async (query: string) => {
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
    console.log(experience);
    return experience;
  } catch (error) {
    throw new Error("Failed to fetch experience data");
  }
};

// Update an experience by its ID
export const updateExperience = async (
  id: string,
  prevSate: any,
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
    await prisma.experience.update({
      data: {
        name: validatedFields.data.name,
        description: validatedFields.data.description,
        duration: validatedFields.data.duration,
        durationUnit: validatedFields.data.durationUnit,
        minPrice: validatedFields.data.minPrice,
        minPeople: validatedFields.data.minPeople,
        maxPeople: validatedFields.data.maxPeople,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update experience" };
  }

  revalidatePath("/account");
  redirect("/account");
};

// Read all reservations
export const getReservationsList = async (query: string) => {
  try {
    const reservations = await prisma.reservation.findMany({});
    return reservations;
  } catch (error) {
    throw new Error("Failed to fetch reservations data");
  }
};

// Create Reservation
export const createReservation = async (prevSate: any, formData: FormData) => {
  const validatedFields = ReservationsSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.reservation.create({
      data: {
        experienceId: validatedFields.data.experienceId,
        people: validatedFields.data.people,
        date: validatedFields.data.date,
        price: validatedFields.data.price,
        time: validatedFields.data.time,
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
      },
    });
  } catch (error) {
    return { message: "Failed to create new reservation" };
  }

  redirect("/account/reservations");
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
export const getClosedDay = async (query: string) => {
  try {
    const closedDays = await prisma.closedDay.findMany({
    });
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




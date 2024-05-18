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

  revalidatePath("/account");
  redirect("/account");
};

// Mise à jour de la fonction getClosedDay pour ne récupérer que les dates
export const getClosedDay = async (query: string) => {
  try {
    const closedDays = await prisma.closedDay.findMany({
      select: {
        date: true, // Sélectionner uniquement le champ date
      },
    });
    // Extraire les dates des objets retournés
    const dates = closedDays.map(closedDay => closedDay.date);
    return dates;
  } catch (error) {
    throw new Error("Failed to fetch closedDays data");
  }
};

"use server"

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// Experience schema type with Zod
const ExperienceSchema = z.object({
  image: z.string().min(6),
  name: z.string().min(6),
  description: z.string().min(6),
  duration: z.string().min(2),
  durationUnit: z.string().min(7),
  minPrice: z.string().min(2),
  minPeople: z.string().min(1),
  maxPeople: z.string().min(0),
});

// Read all experiences
export const getExperiencesList = async (query: string) => {
  try {
    const experiences = await prisma.experience.findMany({
    });
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
    console.log(experience)
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
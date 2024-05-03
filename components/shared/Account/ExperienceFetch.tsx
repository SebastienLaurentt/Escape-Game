import { prisma } from "@/lib/prisma";
import Link from "next/link";

async function getExperiences() {
  const experiences = await prisma.experience.findMany();
  return experiences;
}

export default async function ExperienceFetch() {
  const experiences = await getExperiences();
  return (
    <ul className="flex flex-row gap-x-4">
      {experiences.map((experience) => (
        <li key={experience.id} className="rounded-lg bg-background px-3 py-1">
          <Link href={`/account/${experience.name}`}>{experience.name}</Link>
        </li>
      ))}
    </ul>
  );
}

import { prisma } from "@/lib/prisma";


async function getExperiences() {
  const experiences = await prisma.experience.findMany();
  return experiences;
}

export default async function ExperienceFetch() {
  const experiences = await getExperiences();
  console.log(experiences);
  return (
    <div>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <div>
              <h2>{experience.name}</h2>
              <p>{experience.description}</p>
              <span> Nombre de personnes: {experience.minPeople} à {experience.maxPeople} personnes  </span>
              <span> Durée : {experience.duration} {experience.durationUnit}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

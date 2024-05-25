"use client";

import ExperienceCard from "@/components/shared/ExperienceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createReservation } from "@/lib/action";
import { Experience } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importez useRouter de next/navigation

const ExperienceChoice = ({
  experiences,
}: {
  experiences: Experience[];
}) => {
  const [experienceName, setExperienceName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Utilisez useRouter pour la redirection

  console.log(experienceName);

  const handleCardClick = (cardName: string) => {
    setExperienceName(cardName);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const result = await createReservation(null, formData);
      console.log("Form action result:", result);

      if (result && result.reservationId) { // Assurez-vous que result est défini et contient reservationId
        router.push(`/reservation/booking/${result.reservationId}`); // Redirigez vers la page avec l'ID de la réservation
      } else {
        setError("Failed to create reservation.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setError("An error occurred while creating the reservation.");
    }
  };

  return (
    <div className="pb-4">
      <SectionHeader title="1. Choisissez votre" titleHighlight="expérience" />

      <form onSubmit={handleSubmit}>
        <Input
          type="hidden"
          name="experienceName"
          value={experienceName ?? ""}
        />
        <ul className="mb-6 flex flex-col justify-between gap-y-8 xl:flex-row xl:gap-x-2 2xl:gap-x-4">
          {experiences.map((experience, index) => (
            <li key={index}>
              <ExperienceCard
                src={`https://igppurftciumtqmwijea.supabase.co/storage/v1/object/public/images/${experience.image}`}
                name={experience.name}
                minPrice={experience.minPrice}
                description={experience.description}
                minPeople={experience.minPeople}
                maxPeople={experience.maxPeople || ""}
                duration={experience.duration}
                durationUnit={experience.durationUnit}
                hover={true}
                isSelected={experienceName === experience.name}
                onClick={() => handleCardClick(experience.name)}
              />
            </li>
          ))}
        </ul>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
        {experienceName && (
        <div className="flex flex-row justify-end">
          <Button type="submit">Continuer</Button>
        </div>
        )}
      </form>
    </div>
  );
};

export default ExperienceChoice;

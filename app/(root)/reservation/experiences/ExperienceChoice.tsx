"use client";

import ExperienceCard from "@/components/shared/ExperienceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createReservation } from "@/lib/action";
import { Experience } from "@prisma/client";
import { useState } from "react";
import { useFormState } from "react-dom";

const ExperienceChoice = ({
  experiences,
}: {
  experiences: Experience[]; // Add the 'experiences' property to the type definition
}) => {
  const [state, formAction] = useFormState(createReservation, null);
  const [experienceName, setExperienceName] = useState<string | null>(null);

  const handleCardClick = (cardName: any) => {
    setExperienceName(cardName);
  };
  return (
    <div className="py-12">
      <SectionHeader title="1. Choisissez votre" titleHighlight="expérience" />

      <form action={formAction}>
        <Input
          type="hidden"
          name="experienceId"
          defaultValue={experienceName ?? ""}
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
        <div className="flex flex-row justify-end">
          <Button type="submit">Continuer</Button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceChoice;

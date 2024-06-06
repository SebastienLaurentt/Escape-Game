"use client";

import ExperienceCard from "@/components/shared/ExperienceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createReservation } from "@/lib/action";
import { Experience } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ExperienceChoice = ({ experiences }: { experiences: Experience[] }) => {
  const [experienceId, setExperienceId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { mutate: createReservationMutation, isPending } = useMutation({
    mutationKey: ["create-reservation"],
    mutationFn: async (formData: FormData) => {
      const result = await createReservation(null, formData);
      return result;
    },
    onError: () => {
      setError("An error occurred while creating the reservation.");
    },
    onSuccess: (result) => {
      if (result && result.reservationId) {
        router.push(`/reservation/booking/${result.reservationId}`);
      } else {
        setError("Failed to create reservation.");
      }
    },
  });

  const handleCardClick = (id: string) => {
    setExperienceId(id);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("experienceId", experienceId ?? "");
    createReservationMutation(formData);
  };

  return (
    <div className="py-8 pb-4 xl:pt-0">
      <SectionHeader title="1. Choisissez votre" titleHighlight="expérience" />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <form onSubmit={handleSubmit}>
        <Input type="hidden" name="experienceId" value={experienceId ?? ""} />
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
                isSelected={experienceId === experience.id}
                onClick={() => handleCardClick(experience.id)}
              />
            </li>
          ))}
        </ul>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
        {experienceId && (
          <div className="flex flex-row justify-end">
            <Button type="submit">{isPending ? "Chargement..." : "Continuer"}</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExperienceChoice;

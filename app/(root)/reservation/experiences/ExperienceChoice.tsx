"use client";

import ExperienceCard from "@/components/shared/ExperienceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { createReservation } from "@/lib/action";
import { Experience } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const ExperienceChoice = ({ experiences }: { experiences: Experience[] }) => {
  const [experienceId, setExperienceId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Scroll to submit button when an experience is chosen, but only on screens smaller than XL
    if (window.innerWidth < 1280 && submitButtonRef.current && experienceId) {
      submitButtonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [experienceId]);

  const handleCardClick = (id: string) => {
    setExperienceId(id);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("experienceId", experienceId ?? "");
    createReservationMutation(formData);
  };

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
        setIsSuccess(true);
        router.push(`/reservation/booking/${result.reservationId}`);
      } 
    },
  });

  return (
    <div className="py-8 pb-4">
      <SectionHeader title="I. Choisissez votre" titleHighlight="expérience" />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <form onSubmit={handleSubmit}>
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

        <div className="flex flex-row justify-end">
          <Button disabled={isPending || !experienceId || isSuccess} type="submit" ref={submitButtonRef}>
            {isPending || isSuccess ? "Chargement..." : "Continuer"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceChoice;

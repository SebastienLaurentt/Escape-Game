"use client";

import { Button } from "@/components/ui/button";
import { Experience } from "@prisma/client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ExperienceHome from "../ExperienceHome";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { useMutation } from "@tanstack/react-query";
import { createReservation } from "@/lib/action";
import { useRouter } from "next/navigation";

const Experiences = ({ experiences }: { experiences: Experience[] }) => {
  const sectionHeaderRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isSectionHeaderInView = useInView(sectionHeaderRef, { once: true, amount: 0.4 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const router = useRouter();

  const { mutate: createReservationMutation } = useMutation({
    mutationKey: ["create-reservation"],
    mutationFn: async (experienceId: string) => {
      const formData = new FormData();
      formData.set("experienceId", experienceId);
      const result = await createReservation(null, formData);
      return result;
    },
    onSuccess: (result) => {
      if (result && result.reservationId) {
        router.push(`/reservation/booking/${result.reservationId}`);
      }
    },
    onError: () => {
      alert("An error occurred while creating the reservation.");
    },
  });

  const handleReserveClick = (experienceId: string) => {
    createReservationMutation(experienceId);
  };

  return (
    <Section marginBottom={true} marginTop={true} classname="relative">
      <div
        ref={sectionHeaderRef}
        className={`opacity-0 transition-opacity duration-700 ease-in-out ${isSectionHeaderInView ? "opacity-100" : ""}`}
      >
        <SectionHeader title="Missions de la " titleHighlight="Villa" />
      </div>

      <div
        ref={contentRef}
        className={`opacity-0 transition-opacity delay-300 duration-700 ease-in-out ${isContentInView ? "opacity-100" : ""}`}
      >
        <ul className="mt-20 flex flex-col gap-y-12 md:px-8 xl:gap-y-24 ">
          {experiences.map((experience: Experience, index) => (
            <li key={index}>
              <ExperienceHome
                src={`https://igppurftciumtqmwijea.supabase.co/storage/v1/object/public/images/${experience.image}`}
                name={experience.name}
                longDescription={experience.longDescription}
                minPeople={experience.minPeople}
                maxPeople={experience.maxPeople || ""}
                rowReverse={index % 2 === 1}
                onReserveClick={() => handleReserveClick(experience.id)} 
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Experiences;

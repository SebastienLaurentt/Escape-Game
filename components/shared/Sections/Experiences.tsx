"use client";

import { Button } from "@/components/ui/button";
import { Experience } from "@prisma/client";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ExperienceHome from "../ExperienceHome";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = ({ experiences }: { experiences: Experience[] }) => {
  const sectionHeaderRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isSectionHeaderInView = useInView(sectionHeaderRef, {
    once: true,
    amount: 0.4,
  });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });

  return (
    <Section marginBottom={true} marginTop={true} classname="relative">
      <div
        ref={sectionHeaderRef}
        className={`opacity-0 transition-opacity duration-700 ease-in-out ${
          isSectionHeaderInView ? "opacity-100" : ""
        }`}
      >
        <SectionHeader title="Missions de la " titleHighlight="Villa" />
      </div>

      <div
        ref={contentRef}
        className={`opacity-0 transition-opacity delay-300 duration-700 ease-in-out ${
          isContentInView ? "opacity-100" : ""
        }`}
      >
        {/* Experience Card List */}
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
              />
            </li>
          ))}
        </ul>

        {/* Link Button to Experience / Reservation page */}
        <div className="my-8 flex flex-row justify-center lg:my-12">
          <Button
            asChild
            aria-label="Aller à la page pour réserver son expérience"
          >
            <Link href="/reservation/experiences">Réserver</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;

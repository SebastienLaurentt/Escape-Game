'use client'

import { Button } from "@/components/ui/button";
import { Experience } from "@prisma/client";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ExperienceCard from "../ExperienceCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = ({ experiences }: { experiences: Experience[] }) => {
  const sectionHeaderRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const isSectionHeaderInView = useInView(sectionHeaderRef, {
    once: true,
    amount: 0.4,
  });
  const isListInView = useInView(listRef, { once: true, amount: 0.4 });

  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <div
        ref={sectionHeaderRef}
        className={`opacity-0 transition-opacity duration-700 ease-in-out ${
          isSectionHeaderInView ? "opacity-100" : ""
        }`}
      >
        <SectionHeader title="Des expériences" titleHighlight="variées" />
      </div>

      {/* Experience Card List */}
      <ul
        ref={listRef}
        className={`opacity-0 transition-opacity delay-300 duration-700 ease-in-out ${
          isListInView ? "opacity-100" : ""
        } flex flex-col gap-y-8 md:px-20 lg:px-40 xl:flex-row xl:justify-center xl:gap-x-2 xl:px-0 2xl:gap-x-4 2xl:px-12`}
      >
        {experiences.map((experience: Experience, index) => (
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
              hover={false}
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
    </Section>
  );
};

export default Experiences;

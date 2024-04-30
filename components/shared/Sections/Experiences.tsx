import { Button } from "@/components/ui/button";
import experienceData from "@/data/experienceData";
import Link from "next/link";
import ExperienceCard from "../ExperienceCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Des expériences" titleHighlight="variées" />

      {/* Experience Card List */}
      <ul className="flex flex-col gap-y-8 md:px-20 lg:px-40 xl:flex-row xl:gap-x-2 xl:px-0 2xl:gap-x-4 2xl:px-12">
        {experienceData.map((experience, index) => (
          <li key={index}>
            <ExperienceCard
              src={experience.src}
              alt={experience.alt}
              name={experience.name}
              price={experience.price}
              description={experience.description}
              peopleNumber={experience.peopleNumber}
              duration={experience.duration}
              hover={false}
            />
          </li>
        ))}
      </ul>

      {/* Link Button to Experience / Reservation page */}
      <div className="my-8 flex flex-row justify-center lg:my-12">
        <Button asChild aria-label="Aller à la page pour réserver son expérience">
          <Link href="/experiences">Réserver</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Experiences;

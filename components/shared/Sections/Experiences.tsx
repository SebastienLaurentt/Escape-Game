import { Button } from "@/components/ui/button";
import { getExperiencesList } from "@/lib/action";
import Link from "next/link";
import ExperienceCard from "../ExperienceCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { unstable_noStore } from "next/cache";

const Experiences = async () => {
  unstable_noStore();
  const experiences = await getExperiencesList();
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Des expériences" titleHighlight="variées" />

      {/* Experience Card List */}
      <ul className="flex flex-col gap-y-8 md:px-20 lg:px-40 xl:flex-row xl:justify-center xl:gap-x-2 xl:px-0 2xl:gap-x-4 2xl:px-12">
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

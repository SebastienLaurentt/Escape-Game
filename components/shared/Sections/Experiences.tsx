import { Button } from "@/components/ui/button";
import Link from "next/link";
import HorrorImg from "../../../public/images/Experience1.jpg";
import ThrillerImg from "../../../public/images/Experience2.jpg";
import NightImg from "../../../public/images/Experience3.jpg";
import ExperienceHomeCard from "../ExperienceHomeCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Choisissez votre" titleHighlight="expérience !" />
      <ul className="flex flex-col gap-x-4 gap-y-8 lg:flex-row">
        <li>
          <ExperienceHomeCard
            src={HorrorImg}
            alt="Logo de l'expérience Horror"
            name="Horror"
          />
        </li>

        <li>
          <ExperienceHomeCard
            src={ThrillerImg}
            alt="Logo de l'expérience Thriller"
            name="Thriller"
          />
        </li>

        <li>
          <ExperienceHomeCard
            src={NightImg}
            alt="Logo de l'expérience Night"
            name="Night"
          />
        </li>
      </ul>
      <div className="my-12 flex flex-row justify-center">
        <Button asChild>
          <Link href="/experiences">Réserver</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Experiences;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import HorrorImg from "../../../public/images/Experience1.jpg";
import ThrillerImg from "../../../public/images/Experience2.jpg";
import NightImg from "../../../public/images/Experience3.jpg";
import ExperienceLongerCard from "../ExperienceLongerCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Des expériences" titleHighlight="variées" />
      <ul className="flex flex-col gap-y-8 md:px-20 lg:px-40 xl:flex-row xl:gap-x-2 xl:px-0 2xl:gap-x-4 2xl:px-12">
        <li>
          <ExperienceLongerCard
            src={HorrorImg}
            alt="Logo de l'expérience Horror"
            name="Horror"
            price="35€"
            description="Plongez dans les ténèbres, résolvez les énigmes terrifiantes et échappez aux griffes du mal dans cette expérience d'épouvante."
            peopleNumber="3 à 4 personnes"
            duration="45 minutes"
            hover={false}
          />
        </li>
        <li>
          <ExperienceLongerCard
            src={ThrillerImg}
            alt="Logo de l'expérience Thriller"
            name="Thriller"
            price="30€"
            description="Vivez une montée d'adrénaline palpitante alors que vous explorez des mystères sombres et des secrets sinistres."
            peopleNumber="5 à 6 personnes"
            duration="1 heure"
            hover={false}
          />
        </li>
        <li>
          <ExperienceLongerCard
            src={NightImg}
            alt="Logo de l'expérience Night"
            name="Night"
            price="25€"
            description="Soyez prêt à affronter vos pires cauchemars et à découvrir ce qui se cache dans l'obscurité de cette aventure nocturne."
            peopleNumber="6 à 7 personnes"
            duration="1 heure 30"
            hover={false}
          />
        </li>
      </ul>
      <div className="my-8 flex flex-row justify-center lg:my-12">
        <Button asChild>
          <Link href="/experiences">Réserver</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Experiences;

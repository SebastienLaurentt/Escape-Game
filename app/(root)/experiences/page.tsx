"use client";

import ExperienceLongerCard from "@/components/shared/ExperienceLongerCard";
import PageTitle from "@/components/shared/PageTitle";
import Section from "@/components/shared/Section";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import HorrorImg from "../../../public/images/Experience1.jpg";
import ThrillerImg from "../../../public/images/Experience2.jpg";
import NightImg from "../../../public/images/Experience3.jpg";

const Experiences = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName: any) => {
    setSelectedCard(cardName);
  };

  return (
    <main>
      <PageTitle title="I. Sélectionnez votre expérience" />
      <Section marginBottom={true} marginTop={false} classname="">
        <ul className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 xl:px-28">
          <li>
            <ExperienceLongerCard
              src={HorrorImg}
              alt="Logo de l'expérience Horror"
              name="Horror"
              description="Plongez dans les ténèbres, résolvez les énigmes terrifiantes et échappez aux griffes du mal dans cette expérience d'épouvante."
              peopleNumber="4-6"
              duration="1"
              price="40"
              isSelected={selectedCard === "Horror"}
              onClick={() => handleCardClick("Horror")}
            />
          </li>
          <li>
            <ExperienceLongerCard
              src={ThrillerImg}
              alt="Logo de l'expérience Thriller"
              name="Thriller"
              description="Vivez une montée d'adrénaline palpitante alors que vous explorez des mystères sombres et des secrets sinistres."
              peopleNumber="4-6"
              duration="1"
              price="40"
              isSelected={selectedCard === "Thriller"}
              onClick={() => handleCardClick("Thriller")}
            />
          </li>
          <li>
            <ExperienceLongerCard
              src={NightImg}
              alt="Logo de l'expérience Night"
              name="Night"
              description="Soyez prêt à affronter vos pires cauchemars et à découvrir ce qui se cache dans l'obscurité de cette aventure nocturne."
              peopleNumber="4-6"
              duration="1"
              price="40"
              isSelected={selectedCard === "Night"}
              onClick={() => handleCardClick("Night")}
            />
          </li>
        </ul>
      </Section>

      {selectedCard && (
        <Section marginBottom={false} marginTop={true} classname="flex flex-col justify-center">
          <PageTitle
            title="II. Réservez votre expérience"
            titleDescription="Sélectionnez la date et l'heure qui vous conviennent le mieux pour votre expérience."
          />
          <div className="mx-auto">
            <Calendar />
          </div>
        </Section>
      )}
    </main>
  );
};

export default Experiences;

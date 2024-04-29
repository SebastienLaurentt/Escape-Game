"use client";

import ExperienceLongerCard from "@/components/shared/ExperienceLongerCard";
import PageTitle from "@/components/shared/PageTitle";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import HorrorImg from "../../public/images/Experience1.jpg";
import ThrillerImg from "../../public/images/Experience2.jpg";
import NightImg from "../../public/images/Experience3.jpg";

const Experiences = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleCardClick = (cardName: any) => {
    setSelectedCard(cardName);
  };

  return (
    <main>
      <PageTitle title="Prêts à affronter l'horreur ?" />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="I. Choisissez votre"
          titleHighlight="expérience"
        />
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
              hover={true}
              isSelected={selectedCard === "Horror"}
              onClick={() => handleCardClick("Horror")}
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
              hover={true}
              isSelected={selectedCard === "Thriller"}
              onClick={() => handleCardClick("Thriller")}
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
              hover={true}
              isSelected={selectedCard === "Night"}
              onClick={() => handleCardClick("Night")}
            />
          </li>
        </ul>
      </Section>

      {selectedCard && (
        <Section marginBottom={true} marginTop={true}>
          <SectionHeader title="II. Réservez votre" titleHighlight="créneau" />
          <div className="justify-center gap-x-8 lg:flex lg:flex-row">
            <Calendar mode="single" selected={date} onSelect={setDate} />
            <div>
              Les créneaux disponibles pour l&apos;expérience {selectedCard} le{" "}
            </div>
          </div>
        </Section>
      )}
    </main>
  );
};

export default Experiences;

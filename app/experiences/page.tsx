"use client";

import ExperienceLongerCard from "@/components/shared/ExperienceCard";
import HoursChips from "@/components/shared/HoursChips";
import PageTitle from "@/components/shared/PageTitle";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import React, { useState } from "react";
import HorrorImg from "../../public/images/Experience1.jpg";
import ThrillerImg from "../../public/images/Experience2.jpg";
import NightImg from "../../public/images/Experience3.jpg";

const Experiences = () => {
  // Card Selected State
  const [selectedCard, setSelectedCard] = useState(null);
  // Select State
  const [peopleNumber, setPeopleNumber] = useState(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);

  const handleCardClick = (cardName: any) => {
    setSelectedCard(cardName);
  };

  // Handle select change
  const handleSelectChange = (value: any) => {
    setPeopleNumber(value);
  };

  return (
    <main>
      <PageTitle title="Prêts à affronter l'horreur ?" />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="1. Choisissez votre"
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
          <SectionHeader title="2. Réservez votre" titleHighlight="créneau" />
          <div className="flex flex-col items-center  gap-y-12 lg:gap-y-20 ">
            <div className="flex flex-col items-center">
              <span className="md:text-lg xl:text-md">
                Vous avez choisi l&apos;expérience{" "}
              </span>
              <span className="text-3xl font-bold uppercase text-accent xl:text-5xl">
                {selectedCard}
              </span>
            </div>

            <div className="flex flex-col items-center gap-y-2">
              <h3>A. Combien êtes vous ?</h3>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className=" w-[280px] ">
                  <SelectValue placeholder="Sélectionner votre nombre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="2">
                      2 personnes - <span className="font-bold">35€</span>
                    </SelectItem>
                    <SelectItem value="3">
                      3 personnes - <span className="font-bold">30€</span>
                    </SelectItem>
                    <SelectItem value="4">
                      4 personnes - <span className="font-bold">30€</span>
                    </SelectItem>
                    <SelectItem value="5">
                      5 personnes - <span className="font-bold">25€</span>
                    </SelectItem>
                    <SelectItem value="6">
                      6 personnes - <span className="font-bold">25€</span>{" "}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {peopleNumber && (
              <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-20 lg:gap-x-40">
                <div className="flex flex-col items-center gap-y-2">
                  <h3>B. Quel jour souhaitez vous venir ?</h3>
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </div>
                <div className="flex flex-col items-center">
                  <h3>C. Choisissez une horaire</h3>
                  {date && (
                    <div>
                      <span className="italic">
                        Disponibilités du{" "}
                        {format(date, "EEEE dd MMMM", { locale: fr })}
                      </span>
                      <div className="grid grid-cols-3 gap-4 px-2 py-6">
                        <HoursChips hours="9:00" />
                        <HoursChips hours="10:00" />
                        <HoursChips hours="11:00" />
                        <HoursChips hours="12:00" />
                        <HoursChips hours="13:00" />
                        <HoursChips hours="14:00" />
                        <HoursChips hours="15:00" />
                        <HoursChips hours="16:00" />
                        <HoursChips hours="17:00" />
                        <HoursChips hours="18:00" />
                        <HoursChips hours="19:00" />
                        <HoursChips hours="20:00" />
                        <HoursChips hours="21:00" />
                        <HoursChips hours="22:00" />
                        <HoursChips hours="23:00" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Section>
      )}
    </main>
  );
};

export default Experiences;

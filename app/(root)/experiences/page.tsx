"use client";

import ExperienceCard from "@/components/shared/ExperienceCard";
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
import experienceData from "@/data/experienceData";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import React, { useState } from "react";

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

      {/* 1) Experience Selection */}
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="1. Choisissez votre"
          titleHighlight="expérience"
        />
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
                hover={true}
                isSelected={selectedCard === experience.name}
                onClick={() => handleCardClick(experience.name)}
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* 2) Booking */}
      {selectedCard && (
        <Section marginBottom={true} marginTop={true}>
          <SectionHeader title="2. Réservez votre" titleHighlight="créneau" />
          <div className="flex flex-col items-center  gap-y-12 lg:gap-y-20 ">
            <div className="flex flex-col items-center">
              <span className="md:text-lg xl:text-md">
                Vous avez choisi l&apos;expérience{" "}
              </span>
              <span className="text-3xl font-bold uppercase text-primary xl:text-5xl">
                {selectedCard}
              </span>
            </div>

            {/* A) PeopleNumber Select */}
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

            {/* B) Day Picking */}
            {peopleNumber && (
              <div className="w-full ">
                <div className=" mx-8 flex flex-col gap-y-12 md:flex-row md:justify-around xl:justify-center xl:gap-x-28">
                  <div className="flex  flex-col items-center gap-y-2">
                    <h3 className="w-[320px] text-center">
                      B. Quel jour souhaitez vous venir ?
                    </h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </div>

                  {/* C) Hours Picking */}
                  <div className="flex flex-col items-center">
                    <h3 className="mb-2 w-[320px] text-center">
                      C. Choisissez une horaire
                    </h3>
                    {date && (
                      <div className="flex flex-col items-center">
                        <span className=" italic ">
                          Disponibilités du
                          <span className="text-primary">
                            {
                              format(date, " EEEE dd MMMM", { locale: fr })
                                .replace(/^\w/, (c) => c.toUpperCase()) // Mettre en majuscule la première lettre du jour
                                .replace(/ \w/g, (c) => c.toUpperCase()) // Mettre en majuscule la première lettre de chaque mot du mois
                            }
                          </span>
                        </span>
                        <div className="grid grid-cols-3 gap-4 py-6">
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
              </div>
            )}
          </div>
        </Section>
      )}
    </main>
  );
};

export default Experiences;

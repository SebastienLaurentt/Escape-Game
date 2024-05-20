"use client";

import ExperienceCard from "@/components/shared/ExperienceCard";
import HoursChips from "@/components/shared/HoursChips";
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
import { createReservation } from "@/lib/action";
import { ClosedDay } from "@prisma/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const generateTimeSlots = (startHour: number, endHour: number, interval: number): string[] => {
  const times: string[] = [];
  let currentHour: number = startHour;

  while (currentHour <= endHour) {
    const hours: string = String(currentHour).padStart(2, '0');
    times.push(`${hours}:00`);
    currentHour += interval;
  }

  return times;
};

const ReservationFlow = ({ closedDays }: { closedDays: ClosedDay[] }) => {
  const [state, formAction] = useFormState(createReservation, null);
  // Card Selected State
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  // Select State
  const [peopleNumber, setPeopleNumber] = useState<number | null>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [price, setPrice] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  console.log(price);

  const disabledDates = closedDays.map((day) => new Date(day.date));
  const handleCardClick = (cardName: any) => {
    setSelectedCard(cardName);
  };

  // Handle select change
  const handleSelectChange = (value: string) => {
    const numberOfPeople = parseInt(value);
    setPeopleNumber(numberOfPeople);
    // Update price based on selected people number
    const prices: { [key: number]: number } = {
      2: 35,
      3: 30,
      4: 30,
      5: 25,
      6: 25,
    };
    if (prices[numberOfPeople]) {
      setPrice(prices[numberOfPeople]);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const timeSlots = generateTimeSlots(9, 23, 1); // Générer des créneaux horaires de 9h00 à 23h00 avec un intervalle de 1 heure

  return (
    <>
      <form action={formAction}>
        {/* 1) Experience Selection */}
        <Section marginBottom={true} marginTop={false} classname="">
          <SectionHeader
            title="1. Choisissez votre"
            titleHighlight="expérience"
          />

          <Input name="experienceId" defaultValue={selectedCard ?? ""} />
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
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.experienceId}
            </p>
          </div>
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
                <Input name="people" value={peopleNumber ?? ""} />
                <Input name="price" value={price.toString()} />

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
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.people}
                  </p>
                </div>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.price}
                  </p>
                </div>
              </div>

              {/* B) Day Picking */}
              {peopleNumber && (
                <div className="w-full ">
                  <div className=" mx-8 flex flex-col gap-y-12 md:flex-row md:justify-around xl:justify-center xl:gap-x-28">
                    <div className="flex  flex-col items-center gap-y-2">
                      <h3 className="w-[320px] text-center">
                        B. Quel jour souhaitez vous venir ?
                      </h3>
                      <Input name="date" value={date?.toISOString()} />
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={disabledDates}
                      />
                      <div
                        id="name-error"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        <p className="mt-2 text-sm text-red-500">
                          {state?.Error?.date}
                        </p>
                      </div>
                    </div>

                    {/* C) Hours Picking */}
                    <div className="flex flex-col items-center">
                      <h3 className="mb-2 w-[320px] text-center">
                        C. Choisissez une horaire
                      </h3>
                      <Input name="time" value={selectedTime ?? ""} />
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
                            {timeSlots.map((time, index) => (
                              <HoursChips
                                key={index}
                                hours={time}
                                onClick={handleTimeSelect}
                              />
                            ))}
                          </div>
                          <div
                            id="name-error"
                            aria-live="polite"
                            aria-atomic="true"
                          >
                            <p className="mt-2 text-sm text-red-500">
                              {state?.Error?.time}
                            </p>
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
        <Button type="submit">Valider</Button>
      </form>
    </>
  );
};

export default ReservationFlow;

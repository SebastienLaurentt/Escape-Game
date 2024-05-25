"use client";

import HoursChips from "@/components/shared/HoursChips";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateReservation } from "@/lib/action";
import { ClosedDay, Reservation } from "@prisma/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import React, { useState } from "react";
import { useFormState } from "react-dom";

const generateTimeSlots = (
  startHour: number,
  endHour: number,
  interval: number
): string[] => {
  const times: string[] = [];
  let currentHour: number = startHour;

  while (currentHour <= endHour) {
    const hours: string = String(currentHour).padStart(2, "0");
    times.push(`${hours}:00`);
    currentHour += interval;
  }

  return times;
};
const BookingInfos = ({
  closedDays,
  reservation,
}: {
  closedDays: ClosedDay[];
  reservation: Reservation;
}) => {
  const UpdateReservationWithId = updateReservation.bind(null, reservation.id);
  // Global Form State
  const [state, formAction] = useFormState(UpdateReservationWithId, null);
  console.log(state);

  // Individuals Form States
  const [people, setPeople] = useState<number | null>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState<string | null>(null);

  const handlePeopleSelect = (value: string) => {
    const numberOfPeople = parseInt(value);
    setPeople(numberOfPeople);
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
    setTime(time);
  };

  // Fetch Disabled Dates
  const disabledDates = closedDays.map((day) => new Date(day.date));

  // Define Time Slots
  const timeSlots = generateTimeSlots(9, 23, 1);

  return (
    <div className="py-12">
      <SectionHeader title="2. Réservez votre" titleHighlight="créneau" />
      <form action={formAction}>
        {/* A) PeopleNumber Select */}
        <div className="flex flex-col items-center gap-y-2">
          <h3>A. Combien êtes vous ?</h3>
          <Input type="text" name="people" value={people ?? ""} />
          <Input type="text" name="price" value={price.toString()} />

          <Select onValueChange={handlePeopleSelect}>
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
            <p className="mt-2 text-sm text-red-500">{state?.Error?.people}</p>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.price}</p>
          </div>
        </div>

        {/* B) Day Picking */}
        {people && (
          <div className="w-full ">
            <div className=" mx-8 flex flex-col gap-y-12 md:flex-row md:justify-around xl:justify-center xl:gap-x-28">
              <div className="flex  flex-col items-center gap-y-2">
                <h3 className="w-[320px] text-center">
                  B. Quel jour souhaitez vous venir ?
                </h3>
                <Input type="text" name="date" value={date?.toISOString()} />
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={disabledDates}
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
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
                <Input type="text" name="time" value={time ?? ""} />
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
                      {timeSlots.map((timeSlot, index) => (
                        <HoursChips
                          key={index}
                          hours={timeSlot}
                          onClick={handleTimeSelect}
                          isSelected={time === timeSlot}
                        />
                      ))}
                    </div>
                    <div id="name-error" aria-live="polite" aria-atomic="true">
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
        <div className="flex flex-row justify-end">
          <Button type="submit">Continuer</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingInfos;

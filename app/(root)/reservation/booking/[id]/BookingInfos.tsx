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
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Image from "next/image";
import React, { useState } from "react";

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
  const { mutate: updateReservationMutation, isPending } = useMutation({
    mutationKey: ["update-reservation"],
    mutationFn: async (formData: FormData) => {
      const result = await updateReservation(reservation.id, formData);
      return result;
    },
  });

  const [people, setPeople] = useState<number | null>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState<string | null>(null);

  const handlePeopleSelect = (value: string) => {
    const numberOfPeople = parseInt(value);
    setPeople(numberOfPeople);
    const prices: { [key: number]: number } = {
      2: 70,
      3: 90,
      4: 120,
      5: 125,
      6: 150,
    };
    if (prices[numberOfPeople]) {
      setPrice(prices[numberOfPeople]);
    }
  };

  const handleTimeSelect = (time: string) => {
    setTime(time);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateReservationMutation(formData);
  };

  const timeSlots = generateTimeSlots(9, 23, 1);

  return (
    <div className="py-8 xl:pt-0">
      <SectionHeader title="2. Réservez votre" titleHighlight="créneau" />
      <div className="xl:flex xl:flex-row ">
        <div className="hidden items-center justify-center xl:flex xl:w-1/2 xl:py-12 2xl:w-3/5 2xl:py-0 ">
          <Image
            src="/images/BgHome2.webp"
            alt="Villa de l'effroi image"
            width={1000}
            height={1000}
            className="rounded-xl opacity-30"
          />
          <span className="absolute text-center text-xl font-bold uppercase md:leading-9 lg:text-3xl lg:leading-[48px] xl:text-4xl ">
            La villa vous <br />
            <span className="text-primary">attend</span>
          </span>
        </div>
        <div className="xl:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-8 flex flex-col items-center">
              <h3 className="mb-1">A. Combien êtes vous ?</h3>
              <Input type="hidden" name="people" value={people ?? ""} />
              <Input type="hidden" name="price" value={price.toString()} />

              <Select onValueChange={handlePeopleSelect}>
                <SelectTrigger className=" w-[280px]" aria-label="Choisir le nombre de personnes">
                  <SelectValue placeholder="Sélectionner votre nombre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="2">
                      2 personnes - <span className="font-bold">70€</span>
                    </SelectItem>
                    <SelectItem value="3">
                      3 personnes - <span className="font-bold">90€</span>
                    </SelectItem>
                    <SelectItem value="4">
                      4 personnes - <span className="font-bold">120€</span>
                    </SelectItem>
                    <SelectItem value="5">
                      5 personnes - <span className="font-bold">125€</span>
                    </SelectItem>
                    <SelectItem value="6">
                      6 personnes - <span className="font-bold">150€</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {people && (
              <div className="">
                <div className="flex flex-col gap-y-8 xl:flex-row xl:justify-between 2xl:gap-x-4">
                  <div className="flex flex-col items-center gap-y-2">
                    <h3 className="w-[320px] text-center">
                      B. Choisissez un jour
                    </h3>
                    <Input
                      type="hidden"
                      name="date"
                      value={date?.toISOString()}
                    />
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      closedDays={closedDays.map((day) => day.date)} // Map the closedDays array to extract only the date property
                    />
                  </div>

                  <div className="flex flex-col items-center">
                    <h3 className="w-[320px] text-center">
                      C. Choisissez une horaire
                    </h3>
                    <Input type="hidden" name="timeId" value={time ?? ""} />
                    {date && (
                      <div className="flex flex-col items-center">
                        <span className="italic">
                          Disponibilités du
                          <span className="text-primary">
                            {format(date, " EEEE dd MMMM", { locale: fr })
                              .replace(/^\w/, (c) => c.toUpperCase())
                              .replace(/ \w/g, (c) => c.toUpperCase())}
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
                      </div>
                    )}
                  </div>
                </div>
                {time && (
                  <div className="flex flex-row justify-end">
                    <Button
                      disabled={isPending}
                      isLoading={isPending}
                      loadingText="Chargement"
                      type="submit"
                    >
                      Continuer
                    </Button>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingInfos;
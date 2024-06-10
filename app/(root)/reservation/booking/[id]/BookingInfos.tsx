"use client";

import PeopleSelector from "@/components/shared/BookingForm/PeopleSelector";
import TimeSelector from "@/components/shared/BookingForm/TimeSelector"; // Import du nouveau composant
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { updateReservation } from "@/lib/action";
import { BookedSlot, ClosedDay, Experience, Price, Reservation } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

interface ExtendedExperience extends Experience {
  bookedSlots: BookedSlot[];
}

const generateTimeSlots = (
  date: Date,
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
  priceList,
}: {
  closedDays: ClosedDay[];
  reservation: Reservation & { experience: ExtendedExperience };
  priceList: Price[];
}) => {
  
  // Form States
  const [people, setPeople] = useState<number | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState<string | null>(null);

  // Handle People Select and Price Calculation based on the selected number of people
  const handlePeopleSelect = (value: string) => {
    const numberOfPeople = parseInt(value);
    setPeople(numberOfPeople);
    // Find the price for the selected number of people
    const selectedPrice = priceList.find((price) => price.people === String(numberOfPeople));
    if (selectedPrice) {
      setPrice(parseInt(selectedPrice.price));
    } else {
      // If no price is found, set the price to 0
      setPrice(0);
    }
  };

  const handleTimeSelect = (time: string) => {
    setTime(time);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // All form data set
    formData.set("experienceId", reservation.experienceId ?? "");
    if (people !== null) {
      formData.set("people", people.toString());
    }
    formData.set("price", price.toString());
    const utcDate = date
      ? new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      : null;
    if (utcDate) {
      formData.set("date", utcDate.toISOString());
    }
    formData.set("time", time ?? "");

    updateReservationMutation(formData);
  };

  // Fetch booked slots for the selected experience
  const bookedSlots: BookedSlot[] = reservation.experience.bookedSlots;

  // Filter booked slots for the selected date
  const reservedTimesForDate: string[] = bookedSlots
    .filter((slot) => {
      if (date instanceof Date && slot.date instanceof Date) {
        const slotDateString = slot.date.toLocaleDateString("fr-FR");
        const currentDate = date.toLocaleDateString("fr-FR");
        return slotDateString === currentDate;
      }
      return false;
    })
    .map((slot) => slot.time);

  const timeSlots = date ? generateTimeSlots(date, 9, 23, 1) : [];

  const availableTimes = timeSlots.filter(
    (time) => !reservedTimesForDate.includes(time)
  );

  // Update Reservation Mutation
  const { mutate: updateReservationMutation, isPending } = useMutation({
    mutationKey: ["update-reservation"],
    mutationFn: async (formData: FormData) => {
      const result = await updateReservation(reservation.id, formData);
      return result;
    },
  });

  return (
    <div className="w-full py-8 ">
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
            <PeopleSelector
              onPeopleSelect={handlePeopleSelect}
              selectedPeople={people}
              priceList={priceList}
            />

            {people && (
              <div className="">
                <div className="flex flex-col gap-y-8 xl:flex-row xl:justify-between 2xl:gap-x-4">
                  <div className="flex flex-col items-center gap-y-2">
                    <h3 className="w-[320px] text-center">
                      B. Choisissez un jour
                    </h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      closedDays={closedDays.map((day) => day.date)}
                    />
                  </div>

                  <TimeSelector
                    availableTimes={availableTimes}
                    selectedTime={time}
                    selectedDate={date}
                    onTimeSelect={handleTimeSelect}
                  />
                </div>

                {date && (
                  <div className="flex flex-row justify-end">
                    <Button disabled={isPending || !time} type="submit">
                      {isPending ? "Chargement..." : "Continuer"}
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

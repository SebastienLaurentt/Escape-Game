'use client'

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { createClosedDay } from "@/lib/action";
import { ClosedDay } from "@prisma/client";
import { useMutation } from "@tanstack/react-query"; //
import React, { useState } from "react";

const CloseDays = ({ closedDays }: { closedDays: ClosedDay[] }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const utcDate = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        )
      );
      setDate(utcDate);
    } else {
      setDate(undefined);
    }
  };

  const isDayClosed = (selectedDate: Date | undefined) => {
    if (!selectedDate) return false;
    const selectedDateString = selectedDate.toISOString().split("T")[0];
    return closedDays.some((day) => {
      const dayDate = new Date(day.date);
      const dayDateString = dayDate.toISOString().split("T")[0];
      return dayDateString === selectedDateString;
    });
  };

  const { mutate: createClosedDayMutation, isPending } = useMutation({
    mutationKey: ["create-closed-day"],
    mutationFn: async (formData: FormData) => {
      const result = await createClosedDay(null, formData);
      return result;
    },
    onError: () => {
      toast({ title: "Failed to create closed day", variant: "destructive" });
    },
    onSuccess: () => {
      toast({ title: "Ajout d'un jour de fermeture !", variant: "success" });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("date", date?.toISOString() ?? "");
    createClosedDayMutation(formData);
  };

  return (
    <div className="flex flex-col">
      <CardDescription>Fermer des jours</CardDescription>
      <form onSubmit={handleSubmit}>
        <Input type="hidden" name="date" value={date?.toISOString()} />
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          closedDays={closedDays.map((day) => new Date(day.date))}
          className="px-0"
        />
        {!isDayClosed(date) && (
          <Button type="submit" disabled={isPending}>
            {isPending ? <Loader /> : "Fermer le jour"}
          </Button>
        )}
      </form>
    </div>
  );
};

export default CloseDays;

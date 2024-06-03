"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createClosedDay } from "@/lib/action";
import { ClosedDay } from "@prisma/client";
import React from "react";
import { useFormState } from "react-dom";

const CloseDays = ({ closedDays }: { closedDays: ClosedDay[] }) => {
  const [state, formAction] = useFormState(createClosedDay, null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const utcDate = new Date(Date.UTC(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ));
      setDate(utcDate);
    } else {
      setDate(undefined);
    }
  };

  return (
    <div className="flex flex-col">
      <CardDescription>
        Fermer des jours
      </CardDescription>
      <form action={formAction}>
        <Input type="hidden" name="date" value={date?.toISOString()} />
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          closedDays={closedDays.map((day) => new Date(day.date))}
          className="px-0"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.date}</p>
        </div>
        <Button>Fermer le jour</Button>
      </form>
    </div>
  );
};

export default CloseDays;

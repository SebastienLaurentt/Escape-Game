"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { createClosedDay } from "@/lib/action";
import { ClosedDay } from "@prisma/client";
import React from "react";
import { useFormState } from "react-dom";

const SetOpeningDays = ({ closedDays }: { closedDays: ClosedDay[] }) => {
  const [state, formAction] = useFormState(createClosedDay, null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  console.log(date?.toISOString());

  // Retrieve only the date of ClosedDay to send to the Calendar component with the disabled prop
  const disabledDates = closedDays.map(day => new Date(day.date));

  return (
    <>
      <form action={formAction}>
        <Input type="hidden" name="date" defaultValue={date?.toISOString()} />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={disabledDates}
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.date}</p>
        </div>
        <Button>Fermer le jour</Button>
      </form>
    </>
  );
};

export default SetOpeningDays;

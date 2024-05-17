import { Calendar } from "@/components/ui/calendar";
import React from "react";

const SetOpeningDays = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  return (
    <>
      <input type="hidden" name="date" value={date?.toISOString()} />
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </>
  );
};

export default SetOpeningDays;

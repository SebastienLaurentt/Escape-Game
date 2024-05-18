import { ClosedDay } from "@prisma/client";
import { DeleteButton } from "./DeleteClosedDay";

const OpenDays = ({ closedDays }: { closedDays: ClosedDay[] }) => {
  return (
    <div>
      {closedDays.map((day) => (
        <div key={day.id} className="flex flex-rwo items-center gap-x-4">
          <span>{day.date.toISOString()}</span>{" "}
          <DeleteButton id={day.id}/> 
        </div>
      ))}
    </div>
  );
};

export default OpenDays;

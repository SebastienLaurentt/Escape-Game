import { ClosedDay } from "@prisma/client";
import { DeleteButton } from "./DeleteClosedDay";

const OpenDays = ({ closedDays }: { closedDays: ClosedDay[] }) => {
  const formatDate = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);

    // Uppercase to Weekday
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <div>
      {closedDays.map((day) => (
        <div key={day.id} className="flex-rwo flex items-center gap-x-4">
          <span>{formatDate(new Date(day.date))}</span>{" "}
          <DeleteButton id={day.id} />
        </div>
      ))}
    </div>
  );
};

export default OpenDays;

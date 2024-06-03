import { CardDescription } from "@/components/ui/card";
import { ClosedDay } from "@prisma/client";
import { DeleteButton } from "./DeleteClosedDay";

const OpenDays = ({ closedDays }: { closedDays: ClosedDay[] }) => {
  const formatDate = (date: string) => {
    // Convertir la chaîne de date en objet Date
    const parsedDate = new Date(date);

    const formattedDate = parsedDate.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // Uppercase to Weekday
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <div>
      <CardDescription>Réouvrir des jours</CardDescription>
      <ul className="flex flex-col gap-y-2">
        {closedDays.map((day) => (
          <li
            key={day.id}
            className="flex flex-row items-center justify-between gap-x-4"
          >
            <span>{formatDate(day.date.toString())}</span>
            <DeleteButton id={day.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenDays;

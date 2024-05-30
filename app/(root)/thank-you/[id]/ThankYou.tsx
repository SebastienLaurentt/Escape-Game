"use client";

import { Reservation } from "@prisma/client";

const ThankYou = ({ reservation }: { reservation: Reservation }) => {
  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // Capitalize the first letter of the weekday
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <main>
      <div className="mx-auto py-16 sm:py-24 ">
        <div className="flex flex-col items-center gap-y-6 text-center">
          <span className="text-lg font-medium text-primary">Merci !</span>
          <p className="max-w-[500px] text-2xl font-bold leading-10 tracking-tight md:text-4xl md:leading-[52px]">
            Votre réservation a bien été enregistrée.
          </p>
          <p className="text-zinc-500">
            Vous allez recevoir un email de confirmation dans quelques minutes.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;

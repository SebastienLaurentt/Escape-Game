"use client";

import Section from "@/components/shared/Section";
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
      <Section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex max-w-xl flex-col gap-y-2">
            <span className="text-lg font-medium text-primary">Merci !</span>
            <p className="text-2xl font-bold leading-10 tracking-tight md:text-4xl md:leading-[52px]">
              Votre réservation a bien été enregistrée.
            </p>
            <p className="text-zinc-500">
              Vous allez recevoir un email de confirmation dans quelques
              minutes.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ThankYou;

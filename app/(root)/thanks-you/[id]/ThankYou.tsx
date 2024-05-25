"use client";

import Section from "@/components/shared/Section";
import { Separator } from "@/components/ui/separator";
import { Reservation } from "@prisma/client";

const ThankYou = ({ reservation }: { reservation: Reservation }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
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

          <Separator className="mb-2 mt-8" />
          <div>
            <span className="text-md font-semibold uppercase md:text-lg">
              Details de la reservation
            </span>
            <div className="mt-4 flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-4">
                <div className="flex flex-col">
                  <span className="uppercase text-zinc-500">Date</span>
                  <span>
                    {reservation.date
                      ? formatDate(new Date(reservation.date))
                      : "N/A"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-zinc-500">Heure</span>
                  <span>{reservation.time}</span>
                </div>
              </div>

              <div className="flex flex-row gap-x-4">
                <div className="flex flex-col">
                  <span className="uppercase text-zinc-500">Experience</span>
                  <span>{reservation.experienceName}</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-zinc-500">Personnes</span>
                  <span>{reservation.people}</span>
                </div>
              </div>

              <div className="flex flex-row gap-x-4">
                <div className="flex flex-col">
                  <span className="uppercase text-zinc-500">Prix</span>
                  <span>{reservation.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ThankYou;

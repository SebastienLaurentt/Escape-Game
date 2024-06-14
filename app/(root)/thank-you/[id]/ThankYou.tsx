"use client";

import { Reservation } from "@prisma/client";
import gsap from "gsap";
import { useEffect } from "react";

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

  useEffect(() => {
    gsap.fromTo(
      "#booking-status",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.8 }
    );

    gsap.fromTo(
      "#thanks",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.2 }
    );

    gsap.fromTo(
      "#email",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.2 }
    );
  }, []);

  return (
    <main>
      <div className="mx-auto py-16 sm:py-24 ">
        <div className="flex flex-col items-center gap-y-6 text-center">
          <span id="thanks" className="text-lg font-medium text-primary opacity-0">Merci !</span>
          <p
            id="booking-status"
            className="max-w-[500px] text-2xl font-bold leading-10 tracking-tight opacity-0 md:text-4xl md:leading-[52px]"
          >
            Votre réservation a bien été enregistrée.
          </p>
          <p  id="email" className="text-zinc-500 opacity-0">
            Vous allez recevoir un email de confirmation dans quelques minutes.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;

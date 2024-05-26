"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Reservation } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { createCheckoutSession } from "../../booking/[id]/CheckoutAction";

const Preview = ({ reservation }: { reservation: Reservation }) => {
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

  const { id } = reservation;

  const router = useRouter();

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url);
      else throw new Error("Unable to retrieve payment URL.");
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "There was an error on our end. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex max-w-xl flex-col gap-y-2">
            <span className="text-lg font-medium text-primary">
              Bientôt terminé !
            </span>
            <p className="text-2xl font-bold leading-10 tracking-tight md:text-4xl md:leading-[52px]">
              Details de votre reservation
            </p>
          </div>

          <Separator className="mb-2 mt-8" />
          <div>
            <span className="text-md font-semibold uppercase md:text-lg">
              Details de votre reservation
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
          <Button
            onClick={() => createPaymentSession(id)}
            className="px-4 sm:px-6 lg:px-8"
          >
            Check out
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Preview;

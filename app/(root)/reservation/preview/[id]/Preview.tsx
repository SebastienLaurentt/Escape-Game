"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import previewImg from "@/public/images/Experience2.jpg";
import { Reservation } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createCheckoutSession } from "../../booking/[id]/CheckoutAction";

const Preview = ({ reservation }: { reservation: Reservation }) => {
  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // Capitalize the first letter of the weekday
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const { id } = reservation;

  const router = useRouter();

  const { mutate: createPaymentSession, isPending } = useMutation({
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
      <div className="mx-auto flex flex-col-reverse items-center  justify-between  py-16 sm:py-24 xl:flex-row ">
        <div className="mt-14 md:flex md:w-full xl:mt-0 xl:w-3/5 xl:flex-row 2xl:w-2/3">
          <Image
            alt="image experience"
            src={previewImg}
            className="rounded-xl"
          />
        </div>

        {/* Preview Header */}
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col items-center xl:items-start">
            <span className="text-lg font-medium text-primary">
              Bientôt terminé !
            </span>
            <p className="max-w-[400px] text-center text-2xl font-bold leading-10 tracking-tight md:text-4xl md:leading-[52px] xl:text-left">
              Details de votre reservation
            </p>
          </div>

          {/* Reservation Description */}
          <div className=" my-12 flex flex-col items-center text-md xl:items-start">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row  gap-x-4">
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
            </div>
          </div>

          {/* Price and Checkout */}
          <div className="flex flex-row items-center justify-center gap-x-4 xl:justify-start">
            <div className="flex flex-col">
              <span className="text-lg font-bold md:text-lg">
                {reservation.price}€
              </span>
            </div>
            <Button
              disabled={isPending}
              isLoading={isPending}
              loadingText="Chargement"
              onClick={() => createPaymentSession(id)}
              className="px-4 sm:px-6 lg:px-8"
            >
              Confirmer et Payer
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Preview;

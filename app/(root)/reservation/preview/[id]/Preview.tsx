"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import previewImg from "@/public/images/Experience2.jpg";
import { Reservation } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createCheckoutSession } from "../../booking/[id]/CheckoutAction";

// Extend the Reservation interface to include the booked slot and experience
interface ReservationWithTime extends Reservation {
  bookedSlot: {
    id?: string;
    time: string;
    date: Date | null;
  } | null;
  experience: {
    name: string;
    image: string;
  };
}

const Preview = ({ reservation }: { reservation: ReservationWithTime }) => {
  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formattedDate;
  };

  const { id, experience, bookedSlot, people, price } = reservation;
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
      <div className="mx-auto flex flex-col-reverse items-center justify-between py-16 sm:py-24 xl:flex-row">
        <div className="mt-14 xl:mt-0 xl:w-3/5 2xl:w-2/3">
          {experience.image !== null ? (
            <Image
              alt="image experience"
              src={`https://igppurftciumtqmwijea.supabase.co/storage/v1/object/public/images/${experience.image}`}
              className="rounded-xl"
              width={1000}
              height={1000}
            />
          ) : (
            <Image
              alt="image experience par défaut"
              src={previewImg}
              className="rounded-xl"
              width={1000}
              height={1000}
            />
          )}
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
          <div className="my-12 flex flex-col items-center text-md xl:items-start">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-4">
                <div className="flex flex-col">
                  <span className="uppercase text-secondary-foreground">
                    Date
                  </span>
                  <span>
                    {bookedSlot?.date
                      ? formatDate(bookedSlot.date.toString()) // Convert the Date object to a string
                      : "N/A"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-secondary-foreground">
                    Heure
                  </span>
                  <span>{bookedSlot?.time ?? ""}</span>
                </div>
              </div>

              <div className="flex flex-row gap-x-4">
                <div className="flex flex-col">
                  <span className="uppercase text-secondary-foreground">
                    Experience
                  </span>
                  <span>{experience.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-secondary-foreground">
                    Personnes
                  </span>
                  <span>{people}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price and Checkout */}
          <div className="flex flex-row items-center justify-center gap-x-4 xl:justify-start">
            <div className="flex flex-col">
              <span className="text-lg font-bold">{price}€</span>
            </div>
            <Button
              disabled={isPending}
              isLoading={isPending}
              loadingText="Chargement"
              onClick={() => createPaymentSession(id)}
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

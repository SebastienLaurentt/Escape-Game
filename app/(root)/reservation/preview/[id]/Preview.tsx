"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import previewImg from "@/public/images/BgHome.jpg";
import { BookedSlot, Reservation } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createCheckoutSession } from "./CheckoutAction";

interface ExperienceWithSlots {
  name: string;
  image: string | null;
}

interface ReservationWithExperience extends Reservation {
  experience: ExperienceWithSlots;
  bookedSlot: BookedSlot | null;
}

const Preview = ({
  reservation,
}: {
  reservation: ReservationWithExperience;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const router = useRouter();

  const { id, experience, people, price, bookedSlot } = reservation;

  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  };

  const isValidEmail = (email: string): boolean => {
    // Regex to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Update disabled state based on input fields
  useEffect(() => {
    const fieldsFilled = name && email && confirmEmail && phone;
    const emailsMatch = email === confirmEmail;
    const isPhoneValid = phone.length === 10;
    const isValidEmailFormat =
      isValidEmail(email) && isValidEmail(confirmEmail);
    setIsDisabled(
      !(fieldsFilled && emailsMatch && isValidEmailFormat && isPhoneValid)
    );
  }, [name, email, confirmEmail, phone]);

  const { mutate: createPaymentSession, isPending } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: async () => {
      if (email !== confirmEmail) {
        toast({
          title: "Emails do not match",
          description: "Please ensure both email fields match.",
          variant: "destructive",
        });
        throw new Error("Emails do not match");
      }
      return createCheckoutSession(id, { name, email, phone });
    },
    onSuccess: ({ url }) => {
      setIsSuccess(true);
      if (url) router.push(url);
      else throw new Error("Unable to retrieve payment URL.");
    },
    onError: () => {
      toast({
        title: "Une erreur s'est produite",
        description:
          "Il y a eu un problème lors de la création de la session de paiement. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  return (
    <main>
      <div className="mx-auto flex flex-col-reverse items-center justify-between py-16 sm:py-24 xl:flex-row">
        <div className="mt-14 xl:mt-0 xl:w-3/5 2xl:w-2/3">
          <Image
            alt="image experience"
            src={previewImg}
            className="rounded-xl"
            width={1000}
            height={1000}
            priority
          />
        </div>

        {/* Preview Header */}
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col items-center xl:items-start">
            <span className="text-lg font-medium text-primary">
              Bientôt terminé !
            </span>
            <p className="max-w-[400px] text-center text-2xl font-bold leading-10 tracking-tight md:text-4xl md:leading-[52px] xl:text-left">
              Détails de votre réservation
            </p>
          </div>

          {/* Reservation Description */}
          <div className="my-6 flex flex-col items-center text-md xl:items-start">
            {/* Reservation Booking */}
            <div className="mb-4 w-full xl:grid">
              {/* Container for Experience Name */}
              <div className="mb-3 flex flex-col items-center md:col-span-3 lg:col-span-3 xl:hidden">
                <span className="uppercase text-secondary-foreground">
                  Expérience
                </span>
                <span className="text-center">{experience.name}</span>
              </div>
              {/* Container for Date, Time, and People for md and lg screens */}
              <div className="grid grid-cols-3 gap-y-3  xl:grid-cols-2 xl:gap-y-3">
                <div className="flex flex-col items-center xl:items-start">
                  <span className="uppercase text-secondary-foreground">
                    Date
                  </span>
                  <span>
                    {bookedSlot?.date
                      ? formatDate(bookedSlot.date.toString())
                      : "N/A"}
                  </span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="uppercase text-secondary-foreground">
                    Heure
                  </span>
                  <span>{bookedSlot?.time ?? ""}</span>
                </div>
                <div className="hidden flex-col xl:flex xl:items-start">
                  <span className="uppercase text-secondary-foreground">
                    Expérience
                  </span>
                  <span className="text-center">{experience.name}</span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="uppercase text-secondary-foreground">
                    Personnes
                  </span>
                  <span>{people}</span>
                </div>
              </div>
            </div>

            {/* User infos */}
            <div className="flex  flex-col gap-y-3">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label>Confirmation Email</Label>
                <Input
                  type="email"
                  name="confirmEmail"
                  placeholder="Confirmez l'email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-x-2">
                <div>
                  <Label>Nom</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Téléphone</Label>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Téléphone"
                    value={phone}
                    maxLength={10}
                    onChange={(e) => {
                      const userInput = e.target.value;
                      const onlyNumbers = userInput.replace(/\D/g, ""); // Supprimer tout sauf les chiffres
                      if (onlyNumbers.length <= 10) {
                        setPhone(onlyNumbers);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Price and Checkout */}
          <div className="flex flex-col items-center gap-y-2 xl:items-start">
            <div className="flex flex-row items-center justify-center gap-x-4 xl:justify-start">
              <div className="flex flex-col">
                <span className="text-lg font-bold">{price}€</span>
              </div>
              <Button
                onClick={() => createPaymentSession()}
                disabled={isDisabled || isPending || isSuccess}
              >
                {isPending || isSuccess
                  ? "Chargement..."
                  : "Confirmer et Payer"}
              </Button>
            </div>
            <div className="text-sm font-bold text-primary">
              {(!name || !email || !confirmEmail || !phone) &&
                "Veuillez remplir tous les champs"}
              {name &&
                email &&
                confirmEmail &&
                phone &&
                email !== confirmEmail &&
                "Emails non identiques"}
              {name &&
                email &&
                confirmEmail &&
                phone &&
                email === confirmEmail &&
                !isValidEmail(email) &&
                "Email non conforme"}
              {name &&
                email &&
                confirmEmail &&
                phone &&
                email === confirmEmail &&
                isValidEmail(email) &&
                phone.length < 10 &&
                "Numéro de téléphone non conforme"}
              {name &&
                email &&
                confirmEmail &&
                phone &&
                email === confirmEmail &&
                isValidEmail(email) &&
                phone.length === 10 && (
                  <span className="text-green-500">
                    Vous pouvez valider et payer
                  </span>
                )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Preview;

"use client";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { updateOpeningHours } from "@/lib/action";
import type { OpeningHours } from "@prisma/client"; // Utilisation de `import type`
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OpeningHoursSelector from "./OpeningHoursSelector";

const OpeningHours = ({
  openingHoursList,
}: {
  openingHoursList: OpeningHours[];
}) => {
  // State for opening hours list
  const [openingHoursState, setOpeningHoursState] =
    useState<OpeningHours[]>(openingHoursList);

  // Update opening hour in the list
  const updateOpeningHour = (
    index: number,
    updatedOpeningHour: OpeningHours
  ) => {
    const newList = [...openingHoursState];
    newList[index] = updatedOpeningHour;
    setOpeningHoursState(newList);
  };

  // Mutation for updating opening hours
  const { mutate: updateOpeningHoursMutation, isPending } = useMutation({
    mutationKey: ["update-opening-hours"],
    mutationFn: async (formData: FormData) => {
      await updateOpeningHours(formData);
    },
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Horaires mises à jour !",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Erreur pour la mise à jour des horaires, veuillez réessayez. ",
      });
    },
  });

  // Handle save button click
  const handleSave = () => {
    const formData = new FormData();
    formData.append("openingHoursList", JSON.stringify(openingHoursState));
    updateOpeningHoursMutation(formData);
  };

  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        {/* Header */}
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2">
              Horaires d&apos;ouverture
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="py-8 text-sm 2xl:px-10">
          <ul className="mb-5 flex flex-col gap-y-3">
            {openingHoursState.map((openingHour, index) => (
              <OpeningHoursSelector
                key={index}
                openingHours={openingHour}
                onUpdate={(updatedOpeningHour) =>
                  updateOpeningHour(index, updatedOpeningHour)
                }
              />
            ))}
          </ul>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0">
            <Button
              type="button"
              onClick={handleSave}
              disabled={isPending}
              variant="tertiary"
            >
              {isPending ? (
                <span className="flex flex-row items-center gap-x-2">
                 Sauvegarde <Loader />
                </span>
              ) : (
                "Sauvegarder"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpeningHours;

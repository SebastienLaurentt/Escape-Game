//components/editform.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateExperience } from "@/lib/action";
import type { Experience } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";

const ExperienceIdUpdate = ({ experience }: { experience: Experience }) => {
  const UpdateExperienceWithId = updateExperience.bind(null, experience.id);
  const [state, formAction] = useFormState(UpdateExperienceWithId, null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        {/* Header */}
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              <span>Mise à jour</span>
              <span className=" text-primary"> {experience.name} </span>
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="p-6 text-sm">
          {/* Form */}
          <form action={formAction}>
            {/* Name */}

            <div className="mb-5">
              <Label htmlFor="Name">Nom</Label>
              <Input
                type="text"
                defaultValue={experience.name}
                placeholder="Nom de l'experience"
                name="name"
                id="name"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.name}
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Label htmlFor="Name">Image</Label>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={handleImageChange}
              />
              <div className="mt-3 flex flex-row gap-x-4">
                <div className="flex flex-col gap-y-1">
                  <span className="italic">Image Actuelle</span>
                  <Image
                    alt="image de l'expérience"
                    src={`https://igppurftciumtqmwijea.supabase.co/storage/v1/object/public/images/${experience.image}`}
                    height={200}
                    width={200}
                    className="rounded-md"
                  />
                </div>
                {selectedImage && (
                  <div className="flex flex-col gap-y-1">
                    <span className="italic">Nouvelle Image</span>
                    <Image
                      alt="image sélectionnée"
                      src={selectedImage}
                      height={200}
                      width={200}
                      className="rounded-md"
                    />
                  </div>
                )}
              </div>

              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.image}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-5">
              <Label htmlFor="Name">Description</Label>
              <Textarea
                defaultValue={experience.description}
                placeholder="Description de l'experience"
                name="description"
                id="description"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.description}
                </p>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-5">
              <Label htmlFor="Name">Durée</Label>
              <Input
                type="text"
                defaultValue={experience.duration}
                placeholder="Durée de l'expérience"
                name="duration"
                id="duration"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.duration}
                </p>
              </div>
            </div>

            {/* Duration Unit */}
            <div className="mb-5">
              <Label htmlFor="Name">Unité de durée (minutes ou heure)</Label>
              <Input
                type="text"
                defaultValue={experience.durationUnit}
                placeholder="Unité de durée (minutes ou heure)"
                name="durationUnit"
                id="durationUnit"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.durationUnit}
                </p>
              </div>
            </div>

            {/* Min Price */}
            <div className="mb-5">
              <Label htmlFor="Name">Prix minimum</Label>
              <Input
                type="text"
                defaultValue={experience.minPrice}
                placeholder="Prix minimum"
                name="minPrice"
                id="minPrice"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.minPrice}
                </p>
              </div>
            </div>

            {/* Min People */}
            <div className="mb-5">
              <Label htmlFor="Name">Nombre de personnes minimum</Label>
              <Input
                type="text"
                defaultValue={experience.minPeople}
                placeholder="Nombre de personnes minimum"
                name="minPeople"
                id="minPeople"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.minPeople}
                </p>
              </div>
            </div>

            {/* Max People */}
            <div className="mb-5">
              <Label htmlFor="Name">
                Nombre de personnes maximum (optionnel){" "}
              </Label>
              <Input
                type="text"
                defaultValue={experience.maxPeople ?? ""}
                placeholder="Nombre de personnes maximum"
                name="maxPeople"
                id="maxPeople"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.maxPeople}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0">
              <Button>Update</Button>
              <div id="message-error" aria-live="polite" aria-atomic="true">
                <p className="text-center text-base text-green-600">
                  {state?.message}
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceIdUpdate;

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!selectedImage) {
      formData.append("currentImageUrl", `${experience.image}`);
    }
    formAction(formData);
  };

  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              <span>Mise à jour</span>
              <span className=" text-primary"> {experience.name} </span>
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="p-6 text-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Label htmlFor="Name">Nom</Label>
              <Input
                type="text"
                defaultValue={experience.name}
                placeholder="Nom de l'experience"
                name="name"
                id="name"
                className="mt-1"
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
                className="mt-1"
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
            <div className="mb-5">
              <Label htmlFor="Name">Description</Label>
              <Textarea
                defaultValue={experience.description}
                placeholder="Description de l'experience"
                name="description"
                id="description"
                className="mt-1"
                rows={4}
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-x-2">
              <div className="mb-5">
                <Label htmlFor="Name">Durée</Label>
                <Input
                  type="text"
                  defaultValue={experience.duration}
                  placeholder="Durée de l'expérience"
                  name="duration"
                  id="duration"
                  className="mt-1 w-[100px]"
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.duration}
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <Label htmlFor="Name">Unité de durée</Label>
                <div className="mt-1">
                  <Select
                    name="durationUnit"
                    defaultValue={experience.durationUnit}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder={experience.durationUnit} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="minutes">minutes</SelectItem>
                        <SelectItem value="heure">heure</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.durationUnit}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5 flex flex-row gap-x-4">
              <div>
                <Label htmlFor="Name">Personnes Min</Label>
                <Input
                  type="text"
                  defaultValue={experience.minPeople}
                  placeholder="Pers min"
                  name="minPeople"
                  id="minPeople"
                  className="mt-1"
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.minPeople}
                  </p>
                </div>
              </div>
              <div>
                <Label htmlFor="Name">Personnes Max</Label>
                <Input
                  type="text"
                  defaultValue={experience.maxPeople}
                  placeholder="Pers max"
                  name="maxPeople"
                  id="maxPeople"
                  className="mt-1"
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.maxPeople}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <Label htmlFor="Name">Prix minimum</Label>
              <Input
                type="text"
                defaultValue={experience.minPrice}
                placeholder="Prix minimum"
                name="minPrice"
                id="minPrice"
                className="mt-1"
              />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">
                  {state?.Error?.minPrice}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0">
              <Button type="submit">Mettre à jour</Button>
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

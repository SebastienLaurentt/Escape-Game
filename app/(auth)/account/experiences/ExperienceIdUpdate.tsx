"use client";

import Loader from "@/components/shared/Loader";
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
import { toast } from "@/components/ui/use-toast";
import { updateExperience } from "@/lib/action";
import type { Experience } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

const ExperienceIdUpdate = ({ experience }: { experience: Experience }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMinPeople, setSelectedMinPeople] = useState<string>(
    experience.minPeople
  );
  const [selectedMaxPeople, setSelectedMaxPeople] = useState<string>(
    experience.maxPeople
  );

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

  const {
    mutate: updateExperienceMutation,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ["update-experience"],
    mutationFn: async (formData: FormData) => {
      const result = await updateExperience(experience.id, formData);
      return result;
    },
    onError: () => {
      alert("An error occurred while updating the experience.");
    },
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Experience mise à jour !",
      });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!selectedImage) {
      formData.append("currentImageUrl", `${experience.image}`);
    }
    updateExperienceMutation(formData);
  };

  const minPeopleValue = parseInt(selectedMinPeople);
  const maxPeopleOptions = [];

  for (let i = minPeopleValue; i <= 9; i++) {
    maxPeopleOptions.push(
      <SelectItem key={i} value={i.toString()}>
        {i}
      </SelectItem>
    );
  }

  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex flex-col gap-2 text-lg 2xl:flex-row">
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
              {error && (
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    Error: {error.message}
                  </p>
                </div>
              )}
            </div>
            <div className="mb-5">
              <Label htmlFor="image">Image</Label>
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
            </div>
            <div className="mb-5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                defaultValue={experience.description}
                placeholder="Description de l'experience"
                name="description"
                id="description"
                className="mt-1"
                rows={4}
              />
            </div>
            <div className="flex flex-row gap-x-2">
              <div className="mb-5">
                <Label htmlFor="duration">Durée</Label>
                <Input
                  type="text"
                  defaultValue={experience.duration}
                  placeholder="Durée de l'expérience"
                  name="duration"
                  id="duration"
                  className="mt-1 w-[100px]"
                />
              </div>

              <div className="mb-5">
                <Label htmlFor="durationUnit">Unité de durée</Label>
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
              </div>
            </div>
            <div className="mb-5 flex flex-row gap-x-4">
              <div>
                <Label htmlFor="minPeople">Personnes Min</Label>
                <div className="mt-1">
                  <Select
                    name="minPeople"
                    defaultValue={experience.minPeople}
                    onValueChange={(value) => {
                      setSelectedMinPeople(value);
                      if (parseInt(value) > parseInt(selectedMaxPeople)) {
                        setSelectedMaxPeople(value);
                      }
                    }}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder={experience.minPeople} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="7">7</SelectItem>
                        <SelectItem value="8">8</SelectItem>
                        <SelectItem value="9">9</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="maxPeople">Personnes Max</Label>
                <div className="mt-1">
                  <Select
                    name="maxPeople"
                    value={selectedMaxPeople}
                    onValueChange={(value) => setSelectedMaxPeople(value)}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder={selectedMaxPeople} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>{maxPeopleOptions}</SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <Label htmlFor="minPrice">Prix minimum</Label>
              <Input
                type="text"
                defaultValue={experience.minPrice}
                placeholder="Prix minimum"
                name="minPrice"
                id="minPrice"
                className="mt-1"
              />
            </div>
            <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0">
              <Button type="submit" disabled={isPending} variant="tertiary">
                {isPending ? (
                  <span className="flex flex-row items-center gap-x-2">
                    Sauvegarde <Loader />
                  </span>
                ) : (
                  "Sauvegarder"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceIdUpdate;

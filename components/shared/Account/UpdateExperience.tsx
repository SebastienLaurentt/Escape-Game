//components/editform.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateExperience } from "@/lib/action";
import type { Experience } from "@prisma/client";
import { useFormState } from "react-dom";

const UpdateForm = ({ experience }: { experience: Experience }) => {
  const UpdateExperienceWithId = updateExperience.bind(null, experience.id);
  const [state, formAction] = useFormState(UpdateExperienceWithId, null);

  return (
    <div className="md:mx-12 lg:mx-20 xl:mx-32">
      <form action={formAction}>

        {/* Name */}
        <div className="mb-5">
          <Label htmlFor="Name">Nom de l&apos;expérience</Label>
          <Input
            type="text"
            defaultValue={experience.name}
            placeholder="Nom de l'experience"
            name="name"
            id="name"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <Label htmlFor="Name">Description de l&apos;expérience</Label>
          <Textarea
            defaultValue={experience.description}
            placeholder="Description de l'experience"
            name="description"
            id="description"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.description}</p>
          </div>
        </div>

        {/* Duration */}
        <div className="mb-5">
          <Label htmlFor="Name">Durée de l&apos;expérience</Label>
          <Input
            type="text"
            defaultValue={experience.duration}
            placeholder="Durée de l'expérience"
            name="duration"
            id="duration"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.duration}</p>
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
            <p className="mt-2 text-sm text-red-500">{state?.Error?.durationUnit}</p>
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
            <p className="mt-2 text-sm text-red-500">{state?.Error?.minPrice}</p>
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
            <p className="mt-2 text-sm text-red-500">{state?.Error?.minPeople}</p>
          </div>
        </div>

        {/* Max People */}
        <div className="mb-5">
          <Label htmlFor="Name">Nombre de personnes maximum (optionnel) </Label>
          <Input
            type="text"
            defaultValue={experience.maxPeople ?? ''}
            placeholder="Nombre de personnes maximum"
            name="maxPeople"
            id="maxPeople"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.maxPeople}</p>
          </div>
        </div>

        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <Button>Update</Button>
      </form>
    </div>
  );
};

export default UpdateForm;

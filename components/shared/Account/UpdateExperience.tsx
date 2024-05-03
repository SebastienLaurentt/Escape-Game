//components/editform.tsx
"use client";

import { updateExperience } from "@/lib/action";
import type { Experience } from "@prisma/client";
import { useFormState } from "react-dom";

const UpdateForm = ({ experience }: { experience: Experience }) => {
  const UpdateExperienceWithId = updateExperience.bind(null, experience.id);
  const [state, formAction] = useFormState(UpdateExperienceWithId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full max-w-xs"
            placeholder="Full Name..."
            defaultValue={experience.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            name="email"
            id="email"
            className="w-full max-w-xs"
            placeholder="Email..."
            defaultValue={experience.description}
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.description}
            </p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;

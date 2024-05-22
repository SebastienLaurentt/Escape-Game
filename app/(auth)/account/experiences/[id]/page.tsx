import ExperienceIdUpdate from "@/app/(auth)/account/experiences/ExperienceIdUpdate";
import ExperienceFetch from "@/app/(auth)/account/experiences/ExperiencesFetch";

import { getExperienceById } from "@/lib/action";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import ExperiencesHeader from "../ExperienceHeader";

const ExperienceIdFetch = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const experience = await getExperienceById(id);

  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }

  if (!experience) {
    notFound();
  }

  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        {/* Top Left */}
        <ExperiencesHeader />
        {/* Bottom Left */}
        <ExperienceFetch query="" />
      </div>

      {/* Right */}
      <ExperienceIdUpdate experience={experience} />
    </>
  );
};

export default ExperienceIdFetch;

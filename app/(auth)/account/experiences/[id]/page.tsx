import ExperienceFetch from "@/components/shared/Account/ExperienceFetch";
import UpdateExperience from "@/components/shared/Account/UpdateExperience";
import { getExperienceById } from "@/lib/action";
import { auth } from "@/src/auth/auth";
import { notFound, redirect } from "next/navigation";

const UpdateExperiencePage = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  const id = params.id;
  const experience = await getExperienceById(id);

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  if (!experience) {
    notFound();
  }

  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        {/* Top Left */}

        {/* Bottom Left */}
        <ExperienceFetch query="" />
      </div>

      {/* Right */}
      <UpdateExperience experience={experience} />
    </>
  );
};

export default UpdateExperiencePage;

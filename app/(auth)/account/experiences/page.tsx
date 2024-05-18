import ExperienceFetch from "@/app/(auth)/account/experiences/ExperiencesFetch";

import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";
import ExperiencesHeader from "./ExperienceHeader";

export default async function Experiences() {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      {/* Top Left */}
      <ExperiencesHeader />
      {/* Bottom Left */}
      <ExperienceFetch query="" />
    </div>
  );
}

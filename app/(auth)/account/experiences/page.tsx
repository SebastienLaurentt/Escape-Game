 import ExperienceFetch from "@/app/(auth)/account/experiences/ExperiencesFetch";

import ExperiencesHeader from "./ExperienceHeader";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Experiences() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
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

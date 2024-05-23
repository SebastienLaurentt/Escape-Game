import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import OpeningDays from "./OpeningDays";
import OpeningHeader from "./OpeningHeader";
import OpeningHours from "./OpeningHours";
import { redirect } from "next/navigation";

export default async function Opening() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <OpeningHeader />
        <OpeningDays  />
      </div>

      <OpeningHours />
    </>
  );
}

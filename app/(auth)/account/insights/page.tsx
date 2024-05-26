import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Insights() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }
  return (
    <div className="grid auto-rows-max items-start justify-center gap-4 md:gap-8 lg:col-span-2">
      {/* Top Left */}
      <div className="mt-8 flex flex-col text-center text-lg md:text-xl">
        <span>Les informations concernant la comptabilité.</span>
        <span className="text-primary">Bientôt disponible ! </span>
      </div>
      {/* Bottom Left */}
    </div>
  );
}

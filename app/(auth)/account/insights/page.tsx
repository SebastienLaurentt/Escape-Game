import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Insights() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      {/* Top Left */}
      <div>
        <span>Les informations concernant la comptabilité.</span>
        <span>Bientôt disponible ! </span>
      </div>
      {/* Bottom Left */}

    </div>
  );
}
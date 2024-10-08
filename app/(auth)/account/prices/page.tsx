import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";
import PriceHeader from "./PriceHeader";
import PriceList from "./PriceList";

export default async function Opening() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <PriceHeader />
        <PriceList />
      </div>
    </>
  );
}

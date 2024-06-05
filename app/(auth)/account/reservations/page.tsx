import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import OrdersFetch from "./OrdersFetch";
import OrdersHeader from "./OrdersHeader";
import { redirect } from "next/navigation";

export default async function Reservations() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/login");
  }
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <OrdersHeader />
        <OrdersFetch  />
      </div>
    </>
  );
}

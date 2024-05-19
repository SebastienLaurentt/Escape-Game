import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";
import ReservationsHeader from "./ReservationsHeader";
import ReservationsFetch from "./ReservationsFetch";

export default async function Reservations() {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <ReservationsHeader />
        <ReservationsFetch query="" />
      </div>
    </>
  );
}

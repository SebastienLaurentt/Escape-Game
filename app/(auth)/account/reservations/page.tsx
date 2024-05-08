import ReservationsCalendar from "@/components/shared/Account/ReservationsCalendar";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

export default async function Reservations() {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <ReservationsCalendar />
    </div>
  );
}

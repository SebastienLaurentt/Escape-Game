import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

export default async function Reservations() {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <p>Reservations</p>
    </div>
  );
}

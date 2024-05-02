import SignOutButton from "@/components/shared/SignOutButton";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

export default async function Account () {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (session) {
    redirect("/account");
  }


  return (
    <div>
      <div>
        <SignOutButton />
      </div>
      <div>Account</div>
      <div>Compte administrateur</div>
    </div>
  );
};



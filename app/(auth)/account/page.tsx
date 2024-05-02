import ExperienceFetch from "@/components/shared/Account/ExperienceFetch";
import SignOutButton from "@/components/shared/SignOutButton";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

export default async function Account () {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <div>
        <SignOutButton />
      </div>
      <div>Account</div>
      <div>Compte administrateur</div>
      <ExperienceFetch />
    </div>
  );
};



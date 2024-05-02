import SignInButton from "@/components/shared/SignInButton";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

export default async function SignIn ()  {
  const session = await auth();

  // If the user is not authenticated, redirect to the sign-in page
  if (session) {
    redirect("/account");
  }

  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="flex flex-col items-center gap-y-4 rounded-xl bg-slate-800 py-12">
        <h2 className="text-center uppercase">La Villa de l&apos;effroi</h2>
        <h3>Espace Administrateur</h3>
        <SignInButton />
      </div>
    </div>
  );
};




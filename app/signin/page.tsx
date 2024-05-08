import Section from "@/components/shared/Section";
import SignInButton from "@/components/shared/SignInButton";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();

  // If the user is authenticated, redirect to the account page
  if (session) {
    redirect("/account/experiences");
  }

  return (
    <main className="flex h-screen flex-row items-center justify-center">
      <Section>
        <div className="flex flex-col items-center gap-y-4 rounded-xl bg-slate-900 p-12 lg:p-20">
          <h2 className="flex flex-col text-center uppercase">
            <span>La Villa de</span>
            <span className="text-primary">l&apos;effroi</span>
          </h2>
          <h3>Espace Administrateur</h3>
          <SignInButton />
        </div>
      </Section>
    </main>
  );
}
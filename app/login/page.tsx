import Section from "@/components/shared/Section";
import PasswordlessEmail from "@/components/shared/PasswordlessEmail";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const { isAuthenticated } = getKindeServerSession();
  if ((await isAuthenticated())) {
    redirect("/account");
  }

  return (
    <main className="flex h-screen flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-y-4 rounded-xl bg-slate-900 mx-4 p-8 md:p-12 lg:p-20">
          <h2 className="flex flex-col text-center uppercase">
            <span>La Villa de</span>
            <span className="text-primary">l&apos;effroi</span>
          </h2>
          <h3>Espace Administrateur</h3>
          <p className="w-[340px] text-center">Entrez votre email administrateur et nous vous enverrons un code de connexion.</p>
          <PasswordlessEmail />
        </div>
    </main>
  );
}
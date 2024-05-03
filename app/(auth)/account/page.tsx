import ExperienceFetch from "@/components/shared/Account/ExperienceFetch";
import Section from "@/components/shared/Section";
import SignOutButton from "@/components/shared/SignOutButton";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

export default async function Account() {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex h-screen flex-col">
      <Section classname="bg-gray-600 rounded-xl flex-1 p-4">
        <ExperienceFetch query="" />
      </Section>
    </div>
  );
}

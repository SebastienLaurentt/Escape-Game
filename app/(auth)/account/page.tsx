import ExperienceFetch from "@/components/shared/Account/ExperienceFetch";
import Section from "@/components/shared/Section";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";


export default async function Account() {
  const session = await auth();

  // If the user is not authenticated, redirect to the signIn page
  if (!session) {
    redirect("/signin");
  }

  return (
    <Section classname="bg-gray-700 rounded-xl h-full p-4">
      <ExperienceFetch query="" />
    </Section>
  );
}

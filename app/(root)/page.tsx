
import Hero from "@/components/shared/Sections/Hero";
import Infos from "@/components/shared/Sections/Infos";
import Price from "@/components/shared/Sections/Price";
import Experiences from "../../components/shared/Sections/Experiences";
import { getExperiencesList } from "@/lib/action";
import { Experience } from "@prisma/client";

export async function getServerSideProps() {
  const experiences = await getExperiencesList();
  return {
    props: {
      experiences,
    },
  };
}

export default function Home({ experiences }: { experiences: Experience[] }) {
  return (
    <main>
      <Hero />
      <Experiences experiences={experiences} />
      <Price />
      <Infos />
    </main>
  );
}

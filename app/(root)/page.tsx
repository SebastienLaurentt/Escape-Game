import Hero from "@/components/shared/Sections/Hero";
import Infos from "@/components/shared/Sections/Infos";
import { Testimonials } from "@/components/shared/Sections/Testimonials";
import { getExperiencesList } from "@/lib/action";
import { unstable_noStore } from "next/cache";
import Experiences from "../../components/shared/Sections/Experiences";

const Home = async () => {
  unstable_noStore();
  const experiences = await getExperiencesList();
  return (
    <main>
      <Hero />
      <Experiences experiences={experiences} />
      <Testimonials />
      <Infos />
    </main>
  );
};

export default Home;

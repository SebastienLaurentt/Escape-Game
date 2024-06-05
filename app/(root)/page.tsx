import Hero from "@/components/shared/Sections/Hero";
import Infos from "@/components/shared/Sections/Infos";
import Price from "@/components/shared/Sections/Price";
import { Testimonials } from "@/components/shared/Sections/Testimonials";
import Experiences from "../../components/shared/Sections/Experiences";
import { getExperiencesList } from "@/lib/action";
import { unstable_noStore } from "next/cache";

const Home = async () => {
  unstable_noStore();
  const experiences = await getExperiencesList();
  return (
    <main>
      <Hero />
      <Experiences experiences={experiences} />
      <Price />
      <Testimonials />
      <Infos />
      
    </main>
  );
}

export default Home;
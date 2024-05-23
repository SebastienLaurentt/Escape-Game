import Experiences from "@/components/shared/Sections/Experiences";
import Hero from "@/components/shared/Sections/Hero";
import Infos from "@/components/shared/Sections/Infos";
import Price from "@/components/shared/Sections/Price";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experiences query="" />
      <Price />
      <Infos />
    </main>
  );
}

import dynamic from 'next/dynamic';

import Hero from "@/components/shared/Sections/Hero";
import Infos from "@/components/shared/Sections/Infos";
import Price from "@/components/shared/Sections/Price";
const Experiences = dynamic(() => import("../../components/shared/Sections/Experiences"), {
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Experiences />
      <Price />
      <Infos />
    </main>
  );
}

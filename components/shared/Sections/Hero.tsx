"use client";

import Particles from "@/components/ui/particles";
import { creepster } from "@/lib/font";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import BgHome from "../../../public/images/BgHome2.webp";
import { Button } from "../../ui/button";
import Section from "../Section";

const Hero = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    // Hero Text Animation
    gsap.fromTo("#hero-text", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="relative flex h-screen flex-row items-center justify-center xl:justify-center">
      {/* Black Overlay */}
      <div className="absolute left-0 top-0 z-10 size-full bg-neutral-950 opacity-80" />

      {/* Bg Img with gradient overlay */}
      <div className="relative flex h-screen w-full flex-row justify-center">
        <Image src={BgHome} alt="home picture" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
      </div>

      {/* Hero Text */}
      <Section
        id="hero-text"
        classname="absolute z-10 opacity-0 flex flex-col items-center w-full xl:items-center text-center"
      >
        <h1 className={`${creepster} uppercase`}>
          La Villa de <span className="text-primary">l&apos;Effroi</span>
        </h1>
        <p className="my-4 w-[250px] md:w-[500px] md:text-lg lg:text-xl">
          Explorez la Villa de l&apos;Effroi. <br /> Échappez-vous avant
          l&apos;horreur.
        </p>
        <Button
          asChild
          aria-label="Aller à la page pour réserver son expérience"
        >
          <Link href="/reservation/experiences">
            Réserver
          </Link>
        </Button>
      </Section>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        size={1}
        refresh
      />
    </div>
  );
};

export default Hero;

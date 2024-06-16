"use client";

import Particles from "@/components/ui/particles";
import { anton } from "@/lib/font";
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
        <h1 className={`${anton} flex flex-col uppercase`}>
          <span>Entrez dans la Villa.</span>
          <span>
            Découvrez un{" "}
            <span className="text-primary">Mystère Terrifiant.</span>{" "}
          </span>
        </h1>
        <p className="my-4 w-[330px] text-sm md:w-[550px] md:text-lg">
          Survivez aux énigmes et échappez-vous avant que l&apos;horreur ne vous
          rattrape.
        </p>
        <Button
          asChild
          aria-label="Aller à la page pour réserver son expérience"
          variant="hero"
          size="hero"
        >
          <span>
            <Link
              href="/reservation/experiences"
              className="relative z-10 w-full p-2"
            >
              Réserver
            </Link>
            <span className="absolute right-0 top-1/2 h-32 w-8 -translate-y-1/2 translate-x-12 rotate-12 bg-secondary opacity-40 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
          </span>
        </Button>
      </Section>
      <Particles
        className="absolute inset-0 hidden xl:flex"
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

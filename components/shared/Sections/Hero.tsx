"use client";

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
    gsap.fromTo(
      "#hero-text",
      {
        x: screenWidth < 1280 ? 0 : -30,
        y: screenWidth < 1280 ? -30 : 0,
        opacity: 0,
      },
      { x: 0, opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="relative flex  h-screen flex-row items-center justify-center xl:justify-center">
      <div className="absolute left-0 top-0 z-10 size-full bg-black opacity-80" />
      <div className="relative flex h-screen  w-full flex-row justify-center">
        <Image src={BgHome} alt="home picture" className="object-cover" />
      </div>
      <Section id="hero-text" classname="absolute z-10 flex flex-col items-center w-full xl:items-start xl:text-left text-center">
        <h1>
          Bienvenue chez <br />
          <span className="text-accent-foreground">Escape Room !</span>
        </h1>
        <p className="my-4 w-[200px]  md:w-[400px] md:text-lg lg:text-xl">
          Réservez une salle pour une expérience unique
        </p>
        <Button asChild>
          <Link href="/experiences">Réserver</Link>
        </Button>
      </Section>
    </div>
  );
};

export default Hero;

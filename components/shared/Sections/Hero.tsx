'use client'

import Image from "next/image";
import { useEffect } from "react";
import BgHome from "../../../public/images/BgHome2.webp";
import { Button } from "../../ui/button";
import { gsap } from "gsap";

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
    <div className="relative flex h-screen flex-row justify-center overflow-hidden xl:items-center xl:justify-start">
      <div className="absolute left-0 top-0 z-10 size-full bg-black opacity-80" />
      <div className="relative flex h-screen  flex-row justify-center">
        <Image src={BgHome} alt="home picture" className="object-cover" />
      </div>
      <div id="hero-text" className="absolute  z-10 mt-60 flex flex-col items-center px-4 text-center lg:mt-72 xl:ml-20 xl:mt-0 xl:items-start xl:text-left 2xl:mb-12 2xl:ml-52">
        <h1 className=" text-3xl font-bold md:w-[400px] md:text-4xl lg:w-[500px] lg:text-5xl">
          Bienvenue chez{" "}
          <span className="text-accent-foreground">Escape Room !</span>
        </h1>
        <p className="my-4 w-[200px]  md:w-[400px] md:text-lg lg:text-xl">
          Réservez une salle pour une expérience unique
        </p>
        <Button>Réserver</Button>
      </div>
    </div>
  );
};

export default Hero;

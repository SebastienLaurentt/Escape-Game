"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function NotFound() {
  const animation =
    "https://lottie.host/7ed8b325-e900-476b-92b2-4dadf2aa35b0/KAJWEXGsPG.json";
  return (
    <main>
      <Section
        marginBottom={false}
        marginTop={false}
        classname="text-center mx-auto h-screen"
      >
        <div className="mx-auto w-[320px] pt-28 md:w-[400px] md:pt-32 lg:pt-40 xl:w-[400px] ">
          <h1 className="mb-4 text-2xl leading-[40px] md:text-3xl md:leading-[44px]">
            Ce n&apos;est pas la bonne porte...
          </h1>
          <p className="text-balance text-md md:text-lg lg:text-xl xl:text-md">
            Une mauvaise surprise vous attend !
          </p>
        </div>
        <Player
          autoplay
          loop
          src={animation}
          className="size-[300px] md:size-[400px] lg:size-[600px] xl:size-[400px]"
        ></Player>
        <Button asChild>
          <Link href="/">Courir en arrière !</Link>
        </Button>
      </Section>
    </main>
  );
}

import Image from "next/image";
import BgHome from "../../../public/images/BgHome2.webp";
import { Button } from "../../ui/button";

const Hero = () => {
  return (
    <div className="relative flex h-screen flex-row justify-center overflow-hidden">
      <div className="absolute left-0 top-0 z-10 size-full bg-black opacity-60" />
      <div className="relative flex h-screen  flex-row justify-center">
        <Image src={BgHome} alt="home picture" className="object-cover" />
      </div>
      <div className="absolute  z-10 mt-60 flex flex-col items-center px-4 lg:mt-28">
        <h1 className="text-center text-3xl font-bold md:w-[400px] md:text-4xl lg:w-[500px] lg:text-5xl">
          Bienvenue chez Escape Room !{" "}
        </h1>
        <p className="my-4 w-[200px] text-center md:w-[400px] md:text-lg lg:text-xl">
          Réservez une salle pour une expérience unique
        </p>
        <Button className="bg-white text-black">Réserver</Button>
      </div>
    </div>
  );
};

export default Hero;

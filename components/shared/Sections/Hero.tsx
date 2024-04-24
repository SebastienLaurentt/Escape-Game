import Image from "next/image";
import BgHome from "../../../public/images/BgHome.webp";
import { Button } from "../../ui/button";

const Hero = () => {
  return (
    <div className="relative flex flex-row justify-center h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10" />
      <div className="flex flex-row justify-center  relative h-screen">
        <Image src={BgHome} alt="home picture" className="object-cover" />
      </div>
      <div className="absolute  flex flex-col items-center px-4 mt-60 lg:mt-28 z-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold md:w-[400px] lg:w-[500px]">
          Bienvenue chez Escape Room !{" "}
        </h1>
        <p className="my-4 w-[200px] md:text-lg lg:text-xl md:w-[400px] text-center">
          Réservez une salle pour une expérience unique
        </p>
        <Button className="bg-white text-black">Réserver</Button>
      </div>
    </div>
  );
};

export default Hero;

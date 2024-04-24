import Image from "next/image";
import BgHome from "../../public/images/BgHome.webp";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative flex flex-row justify-center h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-100 z-10" />
      <div className="relative">
        <Image
          src={BgHome}
          alt="home picture"
          className="object-cover"
        />
      </div>
      <div className="absolute text-white flex flex-col items-center px-4 mt-12 z-20">
        <h1 className="text-3xl text-center font-bold">
          Bienvenue chez Escape Room !{" "}
        </h1>
        <p className="my-4 w-[200px] md:text-lg md:w-[400px] text-center">
          Réservez une salle pour une expérience unique
        </p>
        <Button className="bg-white text-black">Réserver</Button>
      </div>
    </div>
  );
};

export default Hero;

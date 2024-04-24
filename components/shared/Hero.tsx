import Image from "next/image";
import BgHome from "../../public/images/BgHome.webp";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-row justify-center">
      <Image src={BgHome} width={1920} height={1080} alt="home picture" className="relative " />
      <div className="absolute text-white flex flex-col ">
        <h1 className="text-3xl font-bold  mt-12">
          Bienvenue chez Escape Room !{" "}
        </h1>
        <span>
          <p className="my-4">Réservez une salle pour une expérience unique</p>
          <Button className="bg-white text-black">Réserver</Button>
        </span>
      </div>
    </div>
  );
};

export default Hero;

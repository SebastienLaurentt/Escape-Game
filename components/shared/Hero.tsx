import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col ">
        <h1 className="text-3xl font-bold  mt-12">
          Bienvenue chez Escape Room !{" "}
        </h1>
        <span>
          <p className="my-4">Réservez une salle pour une expérience unique</p>
          <Button>Réserver</Button>
        </span>
      </div>
    </div>
  );
};

export default Hero;

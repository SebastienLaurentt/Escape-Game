import { User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface ExperienceCardProps {
  src: string;
  name: string;
  longDescription: string;
  minPeople: string;
  maxPeople?: string;
  rowReverse: boolean;
  onReserveClick: () => void;
}

const ExperienceHome = ({
  src,
  name,
  longDescription,
  minPeople,
  maxPeople,
  rowReverse,
  onReserveClick,
}: ExperienceCardProps) => {
  const isRowReverse = rowReverse ? "xl:flex-row-reverse" : "xl:flex-row";

  return (
    <div
      className={`flex flex-col gap-y-6 ${isRowReverse} xl:items-center xl:gap-x-8 2xl:gap-x-16`}
    >
      {/* Img */}
      <div className="relative xl:w-2/3">
        <Image
          src={src}
          alt={`Image de l'expérience ${name}`}
          height={1000}
          width={1000}
          className="rounded-full"
        />

        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_85%_1%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_65%_1%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_50%_1%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_35%_1%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_15%_1%,#0a0a0a_2%,transparent_15%)]" />

        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_85%_99%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_65%_99%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_50%_99%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_35%_99%,#0a0a0a_2%,transparent_15%)]" />
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_15%_99%,#0a0a0a_2%,transparent_15%)]" />

        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_50%,#0a0a0a_80%)]" />
        {/* #0a0a0a */}
      </div>

      {/* Experience Name */}
      <div className="flex flex-col items-center gap-y-4 p-4  text-center xl:w-1/3 xl:items-start xl:p-0 xl:text-left">
        <span className="text-xl font-semibold leading-6 md:text-3xl md:leading-9 ">
          {name}
        </span>

        {/* Description */}
        <span className="text-balance text-secondary-foreground md:text-lg xl:text-md">
          {longDescription}
        </span>

        {/* People Number */}
        <div className="flex w-full flex-row justify-around md:justify-center md:gap-x-8 xl:justify-start">
          <div className="flex flex-row items-center gap-x-1">
            <User className="cardIcon" />
            <span className="text-sm md:text-md xl:text-sm">
              <span>{minPeople}</span>{" "}
              {maxPeople != minPeople ? ` à ${maxPeople}` : ""} personnes
            </span>
          </div>
          <div>
            <Button
              asChild
              aria-label={`Réserver l'expérience ${name}`}
              onClick={onReserveClick}
              className="cursor-pointer"
            >
              <span>Réserver</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceHome;

import { Hourglass, User } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
  src: string;
  name: string;
  minPrice: string;
  description: string;
  minPeople: string;
  maxPeople?: string;
  duration: string;
  durationUnit?: string;
  hover?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const ExperienceCard = ({
  src,
  name,
  minPrice,
  description,
  minPeople,
  maxPeople,
  duration,
  durationUnit,
  hover,
  isSelected,
  onClick,
}: ExperienceCardProps) => {
  const hasHover = hover ? "xl:hover:border-primary  cursor-pointer" : "";

  return (
    <div
      className={`relative  rounded-xl border-2 xl:w-[403px] 2xl:w-[440px]  ${hasHover} ${
        isSelected ? "border-primary" : ""
      }`}
      onClick={onClick}
    >
      {/* Img */}
      <Image
        src={src}
        alt={`Image de l'expérience ${name}`}
        height={600}
        width={1000}
        className="rounded-xl"
      />
      {/* Experience Name and Price */}
      <div className="flex flex-col gap-y-3 p-4">
        <div className="flex flex-row items-center justify-between">
          <span className="text-xl font-semibold leading-6 md:text-3xl md:leading-7">
            {name}
          </span>
          <span className="flex flex-row items-center gap-x-1 md:text-md xl:text-sm">
            dès
            <span className="text-xl font-semibold italic text-primary md:text-3xl ">
              {minPrice}€
            </span>
            / personne
          </span>
        </div>

        {/* Description */}
        <span className="text-secondary-foreground md:text-lg xl:text-md">
          {description}
        </span>

        {/* People Number and Duration */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-1">
            <User className="cardIcon" />
            <span className="text-sm md:text-md xl:text-sm">
              <span>{minPeople}</span> {maxPeople ? ` à ${maxPeople}` : ""}{" "}
              personnes
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-1">
            <Hourglass className="cardIcon" />
            <span className="text-sm md:text-md xl:text-sm">
              {duration} {durationUnit}
            </span>
          </div>
        </div>

        {/* Selected */}
        <div className="absolute right-4 top-4 flex flex-row gap-x-1">
          {isSelected ? (
            <span className="rounded-xl bg-primary px-2 py-1">
              Votre Sélection
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

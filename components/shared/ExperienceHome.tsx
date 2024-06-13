import { Hourglass, User } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
  src: string;
  name: string;
  minPrice: string;
  longDescription: string;
  minPeople: string;
  maxPeople?: string;
  duration: string;
  durationUnit?: string;
  hover?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const ExperienceHome = ({
  src,
  name,
  minPrice,
  longDescription,
  minPeople,
  maxPeople,
  duration,
  durationUnit,
}: ExperienceCardProps) => {

  return (
    <div
      className="relative  rounded-xl border-2 xl:w-[403px] 2xl:w-[440px]"
    
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
          {longDescription}
        </span>

        {/* People Number and Duration */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-1">
            <User className="cardIcon" />
            <span className="text-sm md:text-md xl:text-sm">
              <span>{minPeople}</span> {maxPeople!=minPeople ? ` à ${maxPeople}` : ""}{" "}
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

      </div>
    </div>
  );
};

export default ExperienceHome;

import { Hourglass, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ExperienceCardProps {
  src: StaticImageData;
  alt: string;
  name: string;
  price: string;
  description: string;
  peopleNumber: string;
  duration: string;
  hover?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const ExperienceCard = ({
  src,
  alt,
  name,
  price,
  description,
  peopleNumber,
  duration,
  hover,
  isSelected,
  onClick,
}: ExperienceCardProps) => {

  const hasHover = hover ? "xl:hover:border-accent  cursor-pointer" : "";

  return (
    <div
      className={`relative  rounded-xl border-2 ${hasHover} ${
        isSelected ? "border-accent" : ""
      }`}
      onClick={onClick}
    >
      {/* Img */}
      <Image src={src} alt={alt} className="rounded-xl" />

      {/* Experience Name and Price */}
      <div className="flex flex-col gap-y-3 p-4">
        <div className="flex flex-row items-center justify-between">
          <span className="text-xl font-semibold leading-6 md:text-3xl md:leading-7">
            {name}
          </span>
          <span className="flex flex-row items-center gap-x-1 md:text-md xl:text-sm">
            dès
            <span className="text-xl font-semibold italic text-accent md:text-3xl ">
              {price}
            </span>
            / personne
          </span>
        </div>

        {/* Description */}
        <span className="md:text-lg xl:text-md">{description}</span>

        {/* People Number and Duration */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-1">
            <User className="cardIcon" />
            <span className="text-sm md:text-md xl:text-sm">
              {peopleNumber}
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-1">
            <Hourglass className="cardIcon" />
            <span className="text-sm md:text-md xl:text-sm">{duration}</span>
          </div>
        </div>

        {/* Selected */}
        <div className="absolute right-4 top-4 flex flex-row gap-x-1">
          {isSelected ? (
            <span className="rounded-xl bg-accent px-2 py-1">
              Votre Sélection
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

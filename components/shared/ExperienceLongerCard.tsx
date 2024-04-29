import { Hourglass, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ExperienceLongerCardProps {
  src: StaticImageData;
  alt: string;
  name: string;
  price: string;
  description: string;
  peopleNumber: string;
  duration: string;
  isSelected: boolean;
  onClick: () => void;
}

const ExperienceLongerCard = ({
  src,
  alt,
  name,
  price,
  description,
  peopleNumber,
  duration,
  isSelected,
  onClick,
}: ExperienceLongerCardProps) => {
  return (
    <div
      className={`relative cursor-pointer rounded-xl border-2 ${
        isSelected ? "border-accent" : ""
      }  hover:border-accent`}
      onClick={onClick}
    >
      <Image src={src} alt={alt} className="rounded-xl" />
      <div className="flex flex-col gap-y-3 p-4">
        <div className="flex flex-row items-center justify-between">
          <span className="cardTitle">{name}</span>
          <span className="flex flex-row items-center gap-x-2">
            dès{" "}
            <span className="text-2xl font-semibold italic text-accent">
              {" "}
              {price}
            </span>{" "}
            / personnes{" "}
          </span>
        </div>

        <span>{description}</span>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-1">
            <User size={32} />
            <span className="text-sm">{peopleNumber}</span>
          </div>
          <div className="flex flex-row items-center gap-x-1">
            <Hourglass size={32} />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
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

export default ExperienceLongerCard;

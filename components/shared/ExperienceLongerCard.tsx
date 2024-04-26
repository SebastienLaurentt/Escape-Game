import { Euro, Hourglass, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ExperienceLongerCardProps {
  src: StaticImageData;
  alt: string;
  name: string;
  description: string;
  peopleNumber: string;
  duration: string;
  price: string;
  isSelected: boolean;
  onClick: () => void;
}

const ExperienceLongerCard = ({
  src,
  alt,
  name,
  description,
  peopleNumber,
  duration,
  price,
  isSelected,
  onClick,
}: ExperienceLongerCardProps) => {
  return (
    <div
      className={`cursor-pointer rounded-xl border-2 ${
        isSelected ? "border-accent" : ""
      }  hover:border-accent`}
      onClick={onClick}
    >
      <Image src={src} alt={alt} className="rounded-xl" />
      <div className="flex flex-col gap-y-2 p-3">
        <h2>{name}</h2>
        <span>{description}</span>
        <div className="flex flex-row items-center gap-x-1">
          <span className="text-xl">{peopleNumber}</span>
          <User size={40} />
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <span className="text-xl">{duration}</span>
          <Hourglass size={40} />
        </div>
        <div className="flex flex-row items-center justify-between gap-x-1">
          <div className="flex flex-row">
            <span className="text-xl">{price}</span>
            <Euro size={40} />
          </div>
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

import { Hourglass, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ExperienceLongerCardProps {
  src: StaticImageData;
  alt: string;
  name: string;
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
  description,
  peopleNumber,
  duration,
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
      <div className="flex flex-col p-4">
        <h2>{name}</h2>
        <span className="mb-4">{description}</span>
        <div className="flex flex-row gap-x-12">
          <div className="flex flex-row items-center gap-x-1">
            <User size={32} />
            <span className="text-md">{peopleNumber}</span>
          </div>
          <div className="flex flex-row items-center gap-x-1">
            <Hourglass size={32} />
            <span className="text-md">{duration}</span>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-1">
            {isSelected ? (
              <span className="rounded-xl bg-accent px-2 py-1">
                Votre Sélection
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceLongerCard;

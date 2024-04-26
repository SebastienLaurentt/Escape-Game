import { Euro, Hourglass, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ExperienceLongerCardProps {
  href?: string;
  src: StaticImageData;
  alt: string;
  name: string;
  description: string;
  peopleNumber: string;
  duration: string;
  price: string;
}

const ExperienceLongerCard = ({
  href,
  src,
  alt,
  name,
  description,
  peopleNumber,
  duration,
  price,
}: ExperienceLongerCardProps) => {
  return (
    <div className="rounded-xl border-2 border-white">
      <Image src={src} alt={alt} className="rounded-xl" />
      <div className="flex flex-col gap-y-2 p-2">
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
        <div className="flex flex-row items-center gap-x-1">
          <span className="text-xl">{price}</span>
          <Euro size={40} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceLongerCard;

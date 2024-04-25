import { User } from "lucide-react";
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
  price
}: ExperienceLongerCardProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className="w-full rounded-xl shadow-md shadow-gray-600"
      />
      <div>
        <h2>{name}</h2>
        <span>{description}</span>
        <div className="flex flex-row gap-x-2">
          <span>{peopleNumber}</span>
          <User />
        </div>
        <span>{duration} h </span>
        <span>{price} € </span>
      </div>
    </div>
  );
};

export default ExperienceLongerCard;

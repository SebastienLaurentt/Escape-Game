import Image, { StaticImageData } from "next/image";

interface ExperienceHomeCardProps {
  href?: string;
  src: StaticImageData;
  alt: string;
  name?: string;
}

const ExperienceHomeCard = ({
  href,
  src,
  alt,
  name,
}: ExperienceHomeCardProps) => {
  return (
    <div className="relative mx-auto text-white xl:text-white/0 xl:hover:text-white">
      <Image
        src={src}
        alt={alt}
        className="w-full rounded-xl shadow-md shadow-gray-600"
      />
      <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold uppercase md:text-4xl">
        {name}
      </span>
    </div>
  );
};

export default ExperienceHomeCard;

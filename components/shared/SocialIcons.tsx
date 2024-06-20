import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

interface SocialIconsPropos {
  id?: string;
  classname?: string;
}

const SocialIcons = ({id, classname}: SocialIconsPropos) => {
  return (
    <div id={id} className={`flex flex-row justify-center  ${classname}`}>
      <button aria-label="Allez à la page Instagram de la Villa de l'Effroi">
        <Link href="https://www.instagram.com/" target="_blank" aria-label="Lien Instagram">
          <Instagram className="  size-8 md:size-10 xl:size-6  xl:hover:text-primary" />
        </Link>
      </button>
      <button aria-label="Allez à la page Facebook de la Villa de l'Effroi">
        <Link href="https://www.facebook.com/" target="_blank" aria-label="Lien Facebook">
          <Facebook className="size-8 md:size-10 xl:size-6 xl:hover:text-primary" />
        </Link>
      </button>
    </div>
  );
};

export default SocialIcons;

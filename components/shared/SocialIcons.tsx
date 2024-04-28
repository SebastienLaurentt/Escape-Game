import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

interface SocialIconsPropos {
  id?: string;
  classname?: string;
}

const SocialIcons = ({id, classname}: SocialIconsPropos) => {
  return (
    <div id={id} className={`flex flex-row justify-center  ${classname}`}>
      <button aria-label="Allez à la page Instagram de Escape Room">
        <Link href="" target="_blank">
          <Instagram className="  size-8 md:size-10 xl:size-6  xl:hover:text-accent" />
        </Link>
      </button>
      <button aria-label="Allez à la page Facebook de Escape Room">
        <Link href="" target="_blank">
          <Facebook className="size-8 md:size-10 xl:size-6 xl:hover:text-accent" />
        </Link>
      </button>
    </div>
  );
};

export default SocialIcons;

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const SocialIcons = ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex flex-row justify-center gap-x-8">
      <button aria-label="Allez à la page Instagram de Escape Room">
        <Link href="" target="_blank">
          <Instagram className="  size-8 md:size-10 lg:size-12" />
        </Link>
      </button>
      <button aria-label="Allez à la page Facebook de Escape Room">
        <Link href="" target="_blank">
          <Facebook className="  size-8 md:size-10 lg:size-12" />
        </Link>
      </button>
    </div>
  );
};

export default SocialIcons;

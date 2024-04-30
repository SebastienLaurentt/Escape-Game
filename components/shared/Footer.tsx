import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/Logo.svg";

const Footer = () => {
  return (
    <footer className="px-6  md:px-10 xl:mx-auto xl:max-w-[1600px] xl:px-16">
      <div className=" flex flex-col justify-between border-t border-slate-400 pt-4 text-xs  md:text-sm lg:py-8">
        <div className="mb-6 flex flex-row items-center md:gap-x-4 lg:gap-x-8">
          <span className=" text-2xl uppercase md:text-3xl xl:text-4xl">
            La Villa de <span className="text-accent">l&apos; Effroi</span>
          </span>
          <Image
            src={logo}
            alt="Logo de la Villa de l'Effroi"
            width={50}
            height={50}
            className="hidden md:block"
          />
        </div>

        <div className="gap-x-2 md:flex md:flex-row md:justify-between ">
          <div className="mb-6">
            <span className="text-lg uppercase text-slate-400">Services </span>
            <div className="mt-3 flex flex-col gap-y-2 text-sm">
              <Link href="/faq" className="xl:hover:text-accent">
                Team Building{" "}
              </Link>
              <Link href="/faq" className="xl:hover:text-accent">
                Anniversaire
              </Link>
              <Link href="/faq" className="xl:hover:text-accent">
                Bon cadeau
              </Link>
            </div>
          </div>
          <div className="mb-6">
            <span className="text-lg  uppercase text-slate-400">Contact </span>
            <div className="mt-3 flex flex-col gap-y-2 text-sm">
              <span className="flex flex-row items-center gap-x-2">
                <span className="text-slate-400">
                  <MapPin />
                </span>
                5 Rue Marcel Pagnol, 13000, Marseille
              </span>
              <span className="flex flex-row items-center gap-x-2">
                <span className="text-slate-400">
                  <Phone />
                </span>
                06 12 34 56 78
              </span>
              <span className="flex flex-row items-center gap-x-2">
                <span className="text-slate-400">
                  <Mail />
                </span>
                villaeffroi@gmail.com
              </span>
            </div>
          </div>
          <div className="mb-6">
            <span className="text-lg  uppercase text-slate-400">
              Informations
            </span>
            <div className="mt-3 flex flex-col gap-y-2 text-sm">
              <Link href="/faq" aria-label="Aller à la page de la foire aux questions" className="xl:hover:text-accent">
                Foire aux questions
              </Link>
              <Link href="/mentions" aria-label="Aller à la page des mentions légales" className="xl:hover:text-accent">
                Mentions légales
              </Link>
              <Link href="/cgv" aria-label="Aller à la page des conditions générales de ventes" className="xl:hover:text-accent">
                Conditions générales de vente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

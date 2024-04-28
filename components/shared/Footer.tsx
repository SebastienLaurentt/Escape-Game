import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" mx-6 flex flex-col  justify-between border-t border-slate-400 pt-4 text-xs md:mx-10  md:text-sm lg:py-8  xl:mx-16   2xl:max-w-[2000px] ">
      <span className="mb-6 text-2xl uppercase md:text-3xl xl:text-4xl">
        La Villa de l&apos; <span className="text-accent">Effroi</span>
      </span>
      <div className="gap-x-2 md:flex md:flex-row md:justify-between ">
        <div className="mb-6">
          <span className="text-lg uppercase text-slate-400">Services </span>
          <div className="mt-3 flex flex-col gap-y-2 text-sm">
            <span>Team Building</span>
            <span>Anniversaire</span>
            <span>Bon cadeau</span>
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
              lavilladeleffroi@gmail.com
            </span>
          </div>
        </div>
        <div className="mb-6">
          <span className="text-lg  uppercase text-slate-400">
            Informations
          </span>
          <div className="mt-3 flex flex-col gap-y-2 text-sm">
            <Link href="/faq">Foire aux questions</Link>
            <Link href="/mentions">Mentions légales</Link>
            <Link href="/cgv">Conditions générales de vente</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

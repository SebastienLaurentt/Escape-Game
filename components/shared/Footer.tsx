"use client";

import { creepster } from "@/lib/font";
import { useInView } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const isFooterInView = useInView(footerRef, {
    once: true,
    amount: 0.4,
  });

  return (
    <footer
      ref={footerRef}
      className={`w-full px-6 transition-opacity duration-700 ease-in-out md:px-10 xl:mx-auto xl:max-w-[1600px] xl:px-16 ${
        isHomePage && isFooterInView
          ? "opacity-100"
          : isHomePage
          ? "opacity-0"
          : "opacity-100"
      }`}
    >
      <div className="flex flex-col justify-between border-t border-slate-400 pt-4 text-xs md:text-sm lg:py-8">
        <div className="mb-6">
          <span
            className={`${creepster} text-xl uppercase md:text-2xl xl:text-3xl`}
          >
            La Villa de <span className="text-primary">l&apos; Effroi</span>
          </span>
        </div>

        <div className="gap-x-2 md:flex md:flex-row md:justify-between">
          <div className="mb-6">
            <span className="text-lg uppercase text-secondary-foreground">
              Services{" "}
            </span>
            <div className="mt-3 flex flex-col gap-y-2 text-sm">
              <Link href="/faq" className="xl:hover:text-primary">
                Team Building{" "}
              </Link>
              <Link href="/faq" className="xl:hover:text-primary">
                Anniversaire
              </Link>
              <Link href="/faq" className="xl:hover:text-primary">
                Bon cadeau
              </Link>
            </div>
          </div>
          <div className="mb-6">
            <span className="text-lg uppercase text-secondary-foreground">
              Contact{" "}
            </span>
            <div className="mt-3 flex flex-col gap-y-2 text-sm">
              <span className="flex flex-row items-center gap-x-2">
                <span>
                  <MapPin />
                </span>
                5 Rue Marcel Pagnol, 13000, Marseille
              </span>
              <span className="flex flex-row items-center gap-x-2">
                <span>
                  <Phone />
                </span>
                06 12 34 56 78
              </span>
              <span className="flex flex-row items-center gap-x-2">
                <span>
                  <Mail />
                </span>
                villaeffroi@gmail.com
              </span>
            </div>
          </div>
          <div className="mb-6">
            <span className="text-lg uppercase text-secondary-foreground">
              Informations
            </span>
            <div className="mt-3 flex flex-col gap-y-2 text-sm">
              <Link
                href="/faq"
                aria-label="Aller à la page de la foire aux questions"
                className="xl:hover:text-primary"
              >
                Foire aux questions
              </Link>
              <Link
                href="/mentions"
                aria-label="Aller à la page des mentions légales"
                className="xl:hover:text-primary"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgv"
                aria-label="Aller à la page des conditions générales de ventes"
                className="xl:hover:text-primary"
              >
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

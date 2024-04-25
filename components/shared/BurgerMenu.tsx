import { gsap } from "gsap";
import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import navData from "../../data/navData";
import Logo from "../../public/images/Logo.svg";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  useEffect(() => {
    // Désactiver le défilement de la page principale lorsque le menu est ouvert
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    // Nettoyage de l'effet
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Header Opacity Animation
      gsap.fromTo(
        "#headerBurgerMenu",
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      // Nav Opacity and Y translation Animation
      gsap.fromTo(
        "#NavBurgerMenu",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );

      // Instagram Button Opacity and Y translation Animation
      gsap.fromTo(
        "#InstagramBurgerMenu",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [isOpen]);

  return (
    <>
      <button
        className="font-medium uppercase tracking-wider  lg:text-xl"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        Menu
      </button>

      <div
        className={`fixed left-0 top-0 z-40 flex h-screen w-full flex-col   bg-black pb-24 pt-12 text-center transition-all duration-500 ease-in-out  ${
          isOpen ? "opacity-100" : "hidden opacity-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
          className="absolute right-7 top-7 lg:right-20"
        >
          <X className="lg:size-10" />
        </button>

        <div className="mt-32 flex flex-col gap-y-12">
          <Link href="/">
            <Image src={Logo} alt="logo" className="mx-auto  size-40" />
          </Link>

          <ul
            id="NavBurgerMenu"
            className=" flex flex-col gap-6 p-4 text-md font-extralight tracking-[.5em] md:text-lg lg:gap-8 lg:text-xl"
          >
            {navData.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.burgerMenuName}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-row justify-center gap-x-8">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Allez à la page Instagram de Escape Room"
            >
              <Link href="" target="_blank">
                <Instagram className="  size-8 md:size-10 lg:size-12" />
              </Link>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Allez à la page Facebook de Escape Room"
            >
              <Link href="" target="_blank">
                <Facebook className="  size-8 md:size-10 lg:size-12" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

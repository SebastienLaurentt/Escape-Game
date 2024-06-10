"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import navData from "../../data/navData";
import logo from "../../public/images/Logo.svg";
import { Button } from "../ui/button";
import BurgerMenu from "./BurgerMenu";
import SocialIcons from "./SocialIcons";

const Header = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const headerPosition = pathname === "/" ? "absolute top-0 z-20" : "";

  useEffect(() => {
    gsap.fromTo(
      "#header",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.8 }
    );
  }, []);

  return (
    <header id="header" className={`${headerPosition} w-full opacity-0 `}>
      <div className="relative flex flex-row items-center  justify-center  px-6 py-4 lg:px-10 lg:py-6 xl:mx-auto xl:px-16 2xl:max-w-[2000px]">
        <Link href="/" className="mr-auto">
          <Image
            src={logo}
            alt="Logo de la Villa de l'Effroi"
            width={50}
            height={50}
          />
        </Link>

        <nav className="absolute hidden lg:block ">
          <ul className="gap-8 uppercase lg:flex lg:font-medium">
            {navData.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className={
                    "xl:hover:text-primary" + (pathname === link.href ? "" : "")
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row gap-x-4 md:gap-x-6">
          {isAuth && (
            <Button
              asChild
              aria-label="Aller à la page pour réserver son expérience"
            >
              <Link href="/account/experiences">Dashboard</Link>
            </Button>
          )}
          <div className="flex items-center lg:hidden">
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <SocialIcons classname="hidden lg:flex gap-x-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;

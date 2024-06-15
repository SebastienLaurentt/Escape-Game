"use client";

import { gsap } from "gsap";
import { Axe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import navData from "../../data/navData";
import { Button } from "../ui/button";
import BurgerMenu from "./BurgerMenu";
import SocialIcons from "./SocialIcons";

const Header = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      gsap.fromTo(
        "#header",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.8 }
      );
    }
  }, [isHomePage]);

  const headerPosition = isHomePage ? "absolute top-0 z-20 opacity-0" : "opacity-100";

  return (
    <header id="header" className={`${headerPosition} w-full  `}>
      <div className="relative flex flex-row items-center  justify-center  p-6 md:px-10 lg:py-6 xl:mx-auto xl:max-w-[1600px] xl:px-32 ">
        <Link href="/" className="mr-auto flex flex-row items-center gap-x-1">
          <Axe className="size-6 md:size-8" />
          <span className="flex flex-col text-sm font-semibold uppercase leading-[16px] md:text-md md:leading-[20px]">
            <span>villa</span> <span className="text-primary">effroi</span>
          </span>
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
            <Button asChild aria-label="Aller sur le dashboard Administrateur">
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

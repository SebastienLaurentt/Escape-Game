"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navData from "../../data/navData";
import logo from "../../public/images/Logo.svg";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const headerPosition = pathname === "/" ? "absolute top-0 z-20" : "";
  return (
    <header className={`${headerPosition} w-full `}>
      <div className="flex flex-row items-center  justify-between  px-6 py-4 lg:px-10 lg:py-6 xl:mx-auto xl:max-w-[2000px] xl:px-16">
        <Link href="/">
          <Image src={logo} alt="Escape Room" width={50} height={50} />
        </Link>

        <nav className="hidden xl:block ">
          <ul className="gap-8 uppercase xl:flex xl:font-medium">
            {navData.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={
                    "hover:font-bold" + (pathname === link.href ? "" : "")
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center xl:hidden ">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* <div className="hidden flex-row items-center gap-x-4 md:flex">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button>
              <Link href="/sign-in">Se connecter </Link>
            </Button>
          </SignedOut>
          <Button>Réserver</Button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;

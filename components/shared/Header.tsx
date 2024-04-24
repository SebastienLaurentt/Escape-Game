"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/Logo.svg";
import { Button } from "../ui/button";

const Header = () => {
  const pathname = usePathname();
  const headerPosition = pathname === "/" ? "absolute top-0 z-20" : "";
  return (
    <header
      className={`${headerPosition} w-full `}
    >
      <div className="flex  items-center  xl:mx-auto  flex-row justify-between xl:px-16 xl:max-w-[2000px] py-4">
        <Link href="/">
          <Image src={logo} alt="Escape Room" width={50} height={50} />
        </Link>
        <div className="hidden md:flex flex-row items-center gap-x-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button>
              <Link href="/sign-in">Se connecter </Link>
            </Button>
          </SignedOut>
          <Button>Réserver</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

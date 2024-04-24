import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/Logo.svg";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4 px-4 md:px-6 lg:px-10 xl:px-16 xl:w-[1400px] xl:mx-auto">
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
    </header>
  );
};

export default Header;

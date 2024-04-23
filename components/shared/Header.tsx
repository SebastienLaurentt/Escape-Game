import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";


const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4 px-4 border-b-4 border-black">
      <span className="font-bold text-xl">Escape Room</span>
      <div className="flex flex-row items-center gap-x-4">
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

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";


const Header = () => {
  return (
    <header className="flex flex-row justify-between py-4 px-4">
      <h1>Escape Room</h1>
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

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";


const Header = () => {
  return (
    <header className="flex flex-row justify-between px-4">
      <h1>Escape Room</h1>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button>
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
      <Button>Book Now</Button>
    </header>
  );
};

export default Header;

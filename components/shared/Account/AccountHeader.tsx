
import Link from "next/link";
import SignOutButton from "../SignOutButton";

const AccountHeader = () => {
  return (
    <header className="w-full">
      <div className="flex flex-row items-center  justify-between  px-6 py-4 lg:px-10 lg:py-6 xl:mx-auto xl:px-16 2xl:max-w-[2000px]">
        <Link href="/account">Dashboard</Link>
        <SignOutButton />
      </div>
    </header>
  );
};

export default AccountHeader;

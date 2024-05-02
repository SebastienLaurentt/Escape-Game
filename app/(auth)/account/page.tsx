import SignOutButton from "@/components/shared/SignOutButton";
import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

const Account = () => {
  const session = auth();

  // If the user is not authenticated, redirect to the sign-in page
  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <div>
        <SignOutButton />
      </div>
      <div>Account</div>
    </div>
  );
};

export default Account;

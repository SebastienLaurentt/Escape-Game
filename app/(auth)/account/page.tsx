import { auth } from "@/src/auth/auth";
import { redirect } from "next/navigation";

const Account = () => {
  const session = auth();

  // If the user is not authenticated, redirect to the sign-in page
  if (!session) {
    redirect("/signin");
  }

  return <div>Account</div>;
};

export default Account;

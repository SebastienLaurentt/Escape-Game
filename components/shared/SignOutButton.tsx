
import { signOut } from "@/src/auth/auth";
import { Button } from "../ui/button";

const SignOutButton = () => {
  return (
    <form>
      <Button
        formAction={async () => {
          "use server";
          await signOut();
        }}
      >
        Se déconnecter
      </Button>
    </form>
  );
};

export default SignOutButton;

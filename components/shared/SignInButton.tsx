import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const SignInButton = () => {
  return (
    <form>
      <Button
        formAction={async () => {
          "use server";
          await signIn();
        }}
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignInButton;

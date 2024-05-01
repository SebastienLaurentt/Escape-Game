
import { signIn } from "@/src/auth/auth";
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

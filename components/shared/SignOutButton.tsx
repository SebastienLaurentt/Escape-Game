import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button";

const SignOutButton = () => {
  return (
  <Button>
    <LogoutLink>Se déconnecter</LogoutLink>
  </Button>
)};

export default SignOutButton;

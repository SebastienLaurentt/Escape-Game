"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const PasswordlessEmail = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className="flex flex-col gap-y-2">
      <Input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <Button asChild>
        <LoginLink
          authUrlParams={{
            connection_id:
              process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS || "",
            login_hint: email,
          }}
        >
          Continuer
        </LoginLink>
      </Button>
    </div>
  );
};

export default PasswordlessEmail;

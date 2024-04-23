import { UserButton } from "@clerk/nextjs";

const account = () => {
  return (
    <div>
      <div>
        <UserButton />
      </div>
      <div>
        <h1>Account</h1>
      </div>
    </div>
  );
};

export default account;

import SignInButton from "@/components/shared/SignInButton";

const page = () => {
  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="flex flex-col items-center gap-y-4 rounded-xl bg-slate-800 py-12">
        <h2 className="text-center uppercase">La Villa de l&apos;effroi</h2>
        <h3>Espace Administrateur</h3>
        <SignInButton />
      </div>
    </div>
  );
};

export default page;


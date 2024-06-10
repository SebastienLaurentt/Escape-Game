import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();

  return (
    <div className="flex min-h-screen flex-col">
      <Header isAuth={isAuth} />
      <div className="flex flex-1 flex-col justify-center">{children} </div>

      <Footer />
    </div>
  );
}

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Providers from "@/components/shared/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Providers>
        <div className="flex flex-1 flex-col justify-center">{children} </div>
      </Providers>
      <Footer />
    </div>
  );
}

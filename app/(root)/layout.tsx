import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Providers from "@/components/shared/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Providers>{children}</Providers>
      <Footer />
    </div>
  );
}

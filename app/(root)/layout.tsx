import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1 flex-col justify-center">{children} </div>

      <Footer />
    </div>
  );
}

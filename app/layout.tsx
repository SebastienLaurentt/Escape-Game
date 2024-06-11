import Providers from "@/components/shared/Providers";
import { Toaster } from "@/components/ui/toaster";
import { poppins } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Escape Game Experience",
  description: "Welcome to the new escape game experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Providers>
        <body className={`${poppins} min-h-screen`}>
          {children} <Toaster />
        </body>
      </Providers>
    </html>
  );
}

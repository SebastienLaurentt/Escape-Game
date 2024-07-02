import Providers from "@/components/shared/Providers";
import { Toaster } from "@/components/ui/toaster";
import { poppins } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Villa de l'Effroi",
  description: "Bienvenue à la Villa de l'Effroi, l'escape game de l'horreur !",
  metadataBase: new URL('https://acme.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta property="og:image:alt" content="Bienvenue à la Villa de l'Effroi, l'escape game de l'horreur !" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <Providers>
        <body className={`${poppins} min-h-screen`}>
          {children} <Toaster />
        </body>
      </Providers>
    </html>
  );
}

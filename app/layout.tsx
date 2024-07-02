import Providers from "@/components/shared/Providers";
import { Toaster } from "@/components/ui/toaster";
import { poppins } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Villa de l'Effroi",
  description: "Bienvenue à la Villa de l'Effroi, l'escape game de l'horreur !",
  metadataBase: new URL('https://escape-game-pi.vercel.app/'),
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
        <meta property="og:image" content="https://escape-game-pi.vercel.app/opengraph-image.jpg?801d00732b9f70d9" />
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

import { Creepster, Poppins } from "next/font/google";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const creepster_init = Creepster({ subsets: ["latin"], weight: "400", variable: "--font-creepster",});

export const poppins = poppins_init.className;

export const creepster = creepster_init.className;
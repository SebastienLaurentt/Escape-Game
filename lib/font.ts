import { Anton, Poppins } from "next/font/google";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const anton_init = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const poppins = poppins_init.className;

export const creepster = anton_init.className;

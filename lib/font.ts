import { Creepster } from "next/font/google";

const creepster_init = Creepster({ subsets: ["latin"], weight: "400", variable: "--font-creepster",});

export const creepster = creepster_init.className;
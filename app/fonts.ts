import { Inter, Lexend_Deca } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const wotfard = localFont({
  variable: "--font-wotfard",
  src: [
    {
      path: "../public/fonts/wotfard-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/wotfard-medium.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/wotfard-semibold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/wotfard-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const firacode = localFont({
  variable: "--font-firacode",
  src: [
    {
      path: "../public/fonts/FiraCode-Regular.woff2",
      style: "normal",
    },
  ],
});

export const neuzeit = localFont({
  variable: "--font-firacode",
  src: [
    {
      path: "../public/fonts/NeuzeitGrotesk-Bold.woff2",
      style: "normal",
    },
  ],
});
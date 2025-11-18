import { IBM_Plex_Mono, Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const config = {
  url: "https://iamyadav.com",
  title: "I am yadav",
  description: "Developer and entrepreneur",
  fonts: {
    inter,
    ibmPlexMono,
  },
};

export type SiteConfig = typeof config;

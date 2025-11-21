import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const config = {
  url: "https://iamyadav.com",
  title: "I am yadav",
  description: "Developer and entrepreneur",
  fonts: {
    spaceGrotesk,
  },
};

export type SiteConfig = typeof config;

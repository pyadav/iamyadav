import Hero from "@/components/Hero";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 max-w-7xl w-full items-center justify-between text-sm lg:flex">
        <Hero />
      </div>
      <div className="z-10 max-w-7xl w-full items-center justify-between text-sm lg:flex">
        <div className="flex flex-col w-full max-w-3xl my-16">{children}</div>
      </div>
    </main>
  );
}

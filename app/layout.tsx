import GoogleAnalytics from "@/components/GA";
import { inter, lexendDeca } from "app/fonts";
import clsx from "clsx";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        suppressHydrationWarning
        className={clsx(inter.variable, lexendDeca.className)}
      >
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID &&
        process.env.NODE_ENV === "production" ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        ) : null}
        {children}
      </body>
    </html>
  );
}

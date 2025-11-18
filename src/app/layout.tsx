import type { Metadata } from "next";
import { config } from "~/lib/site-config";
import "./globals.css";

const { inter, ibmPlexMono } = config.fonts;

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  alternates: { canonical: "/" },
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: "My portfolio, blog, and personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

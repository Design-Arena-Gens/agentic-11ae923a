import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Atlaze — Analyse. Act. Achieve.",
  description:
    "Atlaze is the digital agency built for data-driven brands. We architect bold experiences that turn complex insight into decisive action.",
  metadataBase: new URL("https://agentic-11ae923a.vercel.app"),
  openGraph: {
    title: "Atlaze — Analyse. Act. Achieve.",
    description:
      "A progressive digital agency crafting dynamic, data-informed experiences for ambitious brands.",
    url: "https://agentic-11ae923a.vercel.app",
    siteName: "Atlaze",
    images: [
      {
        url: "/og-atlaze.png",
        width: 1200,
        height: 630,
        alt: "Atlaze digital agency landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlaze — Analyse. Act. Achieve.",
    description:
      "Data-fuelled digital experiences engineered for momentum.",
    images: ["/og-atlaze.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#080412] text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

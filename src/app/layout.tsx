import type { Metadata, Viewport } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/providers";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast, Open-Source Email Validator API",
  description: "A project made by Dali012",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-2Q8RD1SFGD" />
      <body className={recursive.className}>
        <Navbar />
        <Providers>{children}</Providers>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}

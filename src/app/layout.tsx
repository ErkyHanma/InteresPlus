import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InteresPlus",
  description: "Calculadora de Interes Simple & Compuesto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen`}>
        <Header />

        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}

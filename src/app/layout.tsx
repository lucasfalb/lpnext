import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import 'tailwindcss/tailwind.css';

const montserrat = Montserrat({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carplus - Growth",
  description: "The best LP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"> 
      <body className={montserrat.className}>
        <Header countdown endDate={'2024-02-09T13:00:00'} />
        <main className="w-full m-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

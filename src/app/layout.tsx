import "./globals.css";
import 'tailwindcss/tailwind.css';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Carplus - Growth</title>
        <meta name="description" content="The best LP"/>
        <link rel="preload" href="/fonts/Mont-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      <body>
        <Header countdown endDate={'2024-02-09T13:00:00'} />
        <main className="w-full m-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

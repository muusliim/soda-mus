import localFont from "next/font/local";
import { Lora } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./app.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

const lora = Lora({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alpino.variable} ${lora.variable}`}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

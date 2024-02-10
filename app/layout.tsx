import type { Metadata } from "next";
import { JetBrains_Mono, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HeaderMenu } from "./components/HeaderMenu";

const sourceCodePro = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hack Like This",
  description: "Tech blog and demos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceCodePro.className} cursor-text `}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

          <HeaderMenu/>
          {children}
        </main>
      </body>
    </html>
  );
}

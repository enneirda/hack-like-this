import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu } from '@headlessui/react'
import { HeaderMenu } from "./ui/HeaderMenu";


const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={sourceCodePro.className}>


        <div className="dropdown flex  flex-col items-center mt-16 cursor-text" >
            <Link
              href="/"
              className={`mb-3 text-2xl font-semibold border-r-2 hover:bg-gray-100`}
              id="blink_text"
            >
              <h2>
                HackLike this.
              </h2>

            </Link>

          <ul className="pl-72 dropdown-menu absolute hidden" >
            <li>
            <Link href="/blog"> blog </Link>
            </li>
            <li>
            <Link href="/guestbook"> guestbook </Link>
            </li>
            <li>
            <Link href="/"> about </Link>
            </li>

          </ul>

        </div>
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
          {children}
        </main>
      </body>
    </html>
  );
}

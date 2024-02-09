import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en" className={sourceCodePro.className}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

        <div className="dropdown flex  flex-col items-center" >
          
          <Link
            href="/"
            className={`mb-3 text-2xl font-semibold border-r-2 cursor-text hover:bg-pink-100`}
            id="blink_text"
          >
            <h2>
              HackLike{" "}
              <span className={`text-pink-500`}>this</span>
              <span>.</span>
            </h2>
          

          </Link>

        <ul className="ml-72 mt-8 p-2 dropdown-menu absolute hidden border transition-colors hover:border-gray-300 rounded-lg bg-black" >
          <li className="hover:bg-pink-100">
          <Link href="/blog"> blog </Link>
          </li>
          <li className="hover:bg-pink-100">
          <Link href="/guestbook"> guestbook </Link>
          </li>
          <li className="hover:bg-pink-100">
          <Link href="/"> about </Link>
          </li>
        </ul>

      </div>
          {children}
        </main>
      </body>
    </html>
  );
}

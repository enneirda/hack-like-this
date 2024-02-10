'use client'
import Link from "next/link"
import { useEffect, useState } from "react";

export const HeaderMenu = () => {


    return <div className="dropdown flex  flex-col items-center" >

        <Link
            href="/"
            className={`mb-3 text-2xl font-semibold cursor-text hover:bg-pink-100 relative w-[max-content] font-mono before:absolute before:inset-0 before:bg-black before:animate-typewriter after:absolute after:inset-0 after:w-[0.125em] after:animate-blink
            after:bg-pink-100`}
        >
            <h2>
                HackLike {" "}
                <span className={`text-pink-500`}>this</span>
                <span>.</span>
            </h2>


        </Link>

        <ul className="ml-72 mt-8 p-2 dropdown-menu absolute hidden border hover:border-gray-300 rounded-lg bg-black" >
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
}
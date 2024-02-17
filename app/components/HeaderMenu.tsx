'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const HeaderMenu = () => {
    
    const pathName = usePathname()
    return <div className="dropdown flex  flex-col items-center" >

        <Link
            href="/"
            className={`mb-8 text-2xl font-semibold cursor-text hover:bg-pink-100 relative w-[max-content] font-mono before:absolute before:inset-0 before:bg-white before:dark:bg-black before:animate-typewriter after:absolute after:inset-0 after:w-[0.125em] after:animate-blink
            after:bg-default-blush after:dark:bg-default-blush-dark hover:bg-opacity-20`}
        >
            <h2>
                HackLike {" "}
                <span className={`text-dark-pink-1`}>this</span>
                <span>.{pathName.replace("\/", "").split("\/")[0]}</span>
            </h2>


        </Link>

        <ul className="ml-72 mt-8 p-2 dropdown-menu absolute hidden border hover:border-gray-300 rounded-lg bg-white dark:bg-black" >
        <li className="hover:bg-pink-100 hover:bg-opacity-20">
                <Link href="/"> home </Link>
            </li>
            <li className="hover:bg-pink-100 hover:bg-opacity-20">
                <Link href="/blog"> blog </Link>
            </li>
            <li className="hover:bg-pink-100 hover:bg-opacity-20">
                <Link href="/demos"> demos </Link>
            </li>
            <li className="hover:bg-pink-100 hover:bg-opacity-20">
                <Link href="/guestbook"> guestbook </Link>
            </li>
        </ul>

    </div>
}
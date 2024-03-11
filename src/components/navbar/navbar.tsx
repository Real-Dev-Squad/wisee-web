import Link from "next/link"

import { NAVBAR_LINKS } from "./navbar.constants"
import { TNavbarLink } from "./navbar.types"

type NavbarLinkProps = TNavbarLink

const NavbarLink = ({ href, title }: NavbarLinkProps) => {
    return (
        <Link href={href} className="px-3 py-1 text-stone-500 block rounded hover:bg-stone-200 hover:text-stone-700 transition">
            {title}
        </Link>
    )
}

export const Navbar = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME

    return (
        <nav className="w-full px-2 py-4">
            <h1 className="text-2xl px-2 pb-6 font-semibold text-stone-900">{appName}</h1>

            <ul className="w-full space-y-2">
                {NAVBAR_LINKS.map((link, index) => (
                    <li key={index} className="w-full">
                        <NavbarLink title={link.title} href={link.href} />
                    </li>
                ))}

            </ul>
        </nav>
    )
}

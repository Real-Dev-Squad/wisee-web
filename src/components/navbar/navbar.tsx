import Link from "next/link"

import { NAVBAR_LINKS } from "./navbar.constants"
import { TNavbarLink } from "./navbar.types"

type NavbarLinkProps = TNavbarLink

const NavbarLink = ({ href, title }: NavbarLinkProps) => {
    return (
        <Link
            href={href}
            className="block rounded px-3 py-1 text-stone-500 transition hover:bg-stone-200 hover:text-stone-700"
        >
            {title}
        </Link>
    )
}

export const Navbar = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME

    return (
        <nav className="fixed bottom-0 left-0 h-full w-full border-r border-stone-200 px-2 py-4 xl:w-60">
            <h1 className="px-2 pb-6 text-2xl font-semibold text-stone-900">{appName}</h1>

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

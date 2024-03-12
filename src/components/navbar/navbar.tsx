import Link from "next/link"
import { useRouter } from "next/router"

import { cn } from "@/utils/classname"

import { NAVBAR_LINKS } from "./navbar.constants"
import { TNavbarLink } from "./navbar.types"

type NavbarLinkProps = TNavbarLink & {
    isActive: boolean
}

const NavbarLink = ({ href, title, isActive }: NavbarLinkProps) => {
    return (
        <Link
            href={href}
            className={cn(
                "block rounded-full border border-transparent px-3 py-1 text-stone-500 transition hover:bg-stone-200 hover:text-stone-700 xl:rounded",
                isActive && "border-stone-50 bg-white text-stone-800 shadow shadow-stone-200"
            )}
        >
            {title}
        </Link>
    )
}

export const Navbar = () => {
    const { pathname } = useRouter()
    const appName = process.env.NEXT_PUBLIC_APP_NAME

    return (
        <nav className="fixed bottom-2 left-0 w-full border-none border-stone-200 p-4 xl:h-full xl:w-60 xl:border-r xl:px-2">
            <h1 className="hidden px-2 pb-6 text-2xl font-semibold text-stone-900 xl:block">{appName}</h1>

            <ul className="mx-auto flex w-max justify-center gap-2 rounded-full bg-stone-100 px-2 py-1.5 xl:w-full xl:flex-col">
                {NAVBAR_LINKS.map((link, index) => (
                    <li key={index} className="w-max xl:w-full">
                        <NavbarLink title={link.title} href={link.href} isActive={pathname.startsWith(link.href)} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

import { Plus } from "lucide-react"
import Link from "next/link"

import { Button, Input } from "@/components"
import { cn } from "@/utils/classname"

type HeaderProps = {
    className?: string
}

const Header = ({ className }: HeaderProps) => {
    return (
        <div className={cn("flex items-center justify-end gap-4", className)}>
            <Input placeholder="Search" className="w-72" />
            <Button size="sm" className="shrink-0">
                <Plus /> Create Form
            </Button>
        </div>
    )
}

const Sidebar = () => {
    return (
        <nav className="w-full p-4">
            <h1 className="text-2xl px-2 pb-6 font-semibold text-gray-900">Wisee</h1>

            <ul className="w-full space-y-2">
                <li className="w-full">
                    <Link href="/dashboard" className="px-3 py-1 text-gray-500 block rounded hover:bg-gray-200 hover:text-gray-700 transition">
                        Home
                    </Link>
                </li>

                <li className="w-full">
                    <Link href="/dashboard" className="px-3 py-1 text-gray-500 block rounded hover:bg-gray-200 hover:text-gray-700 transition">
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const FormCard = () => {
    return (
        <div className="space-y-1 py-5 px-6 hover:bg-gray-100 transition rounded-lg cursor-default">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl text-gray-950 font-semibold">
                    <Link href="/">
                        From title here
                    </Link>
                </h1>

                <span className="uppercase text-xs text-gray-500 rounded bg-gray-100 font-semibold px-2 py-1">draft</span>
            </div>

            <p className="text-gray-400 text-sm">Edited 12hours ago</p>
        </div>
    )
}

export const Dashboard = () => {
    return (
        <main className="bg-gray-50 w-ful h-screen flex">
            <div className="w-60 h-full border-r border-gray-200">
                <Sidebar />
            </div>

            <section className="bg-white h-full flex-1 w-full overflow-auto px-4">
                <Header className="pt-4 pb-5" />

                <div className="px-4 pb-16 space-y-1">
                    {new Array(5).fill(0).map((_, i) => <FormCard key={i} />)}
                </div>

                <div className="px-6">
                    <Button asChild variant="ghost" size="lg" className="px-4 [&>svg]:w-7 [&>svg]:h-7">
                        <Link href="/create" className="flex items-center gap-2 text-2xl text-gray-300 hover:text-gray-400 transition hover:bg-gray-100 py-2 px-3 w-max rounded-lg">
                            <Plus />
                            <span className="font-medium">Create Form</span>
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}

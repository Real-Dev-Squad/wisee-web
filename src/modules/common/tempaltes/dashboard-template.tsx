import { type ReactNode } from "react"

import Head from "next/head"

import { Navbar } from "@/components/navbar"

type Props = {
    title?: string
    children: ReactNode
}

export const DashboardTemplate = ({ title, children }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <main className="flex h-screen w-full">
                <Navbar />

                <div className="flex flex-1 flex-col">{children}</div>
            </main>
        </div>
    )
}

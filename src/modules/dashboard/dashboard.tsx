import { Plus } from "lucide-react"
import Head from "next/head"
import Link from "next/link"

import { Button } from "@/components"
import { Sidebar } from "@/components/sidebar"

import { DashboardHeader } from "./components"

const FormCard = () => {
    return (
        <div className="space-y-1 py-5 px-6 hover:bg-stone-100 transition rounded-lg cursor-default">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl text-stone-950 font-semibold">
                    <Link href="/">
                        From title here
                    </Link>
                </h1>

                <span className="uppercase text-xs text-stone-500 rounded bg-stone-100 font-semibold px-2 py-1">draft</span>
            </div>

            <p className="text-stone-400 text-sm">Edited 12hours ago</p>
        </div>
    )
}

export const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <main className="bg-stone-50 w-ful h-screen flex">
                <div className="w-60 h-full border-r border-stone-200">
                    <Sidebar />
                </div>

                <section className="bg-white h-full flex-1 w-full overflow-auto px-4">
                    <DashboardHeader className="pt-4 pb-5" />

                    <div className="px-4 pb-16 space-y-1">
                        {new Array(5).fill(0).map((_, i) => <FormCard key={i} />)}
                    </div>

                    <div className="px-6">
                        <Button asChild variant="ghost" size="lg" className="px-4 text-2xl [&>svg]:w-7 [&>svg]:h-7">
                            <Link href="/create" className="flex items-center gap-2 text-stone-300 hover:text-stone-400 transition hover:bg-stone-100 py-2 px-3 w-max rounded-lg">
                                <Plus />
                                <span className="font-medium">Create Form</span>
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
        </>
    )
}

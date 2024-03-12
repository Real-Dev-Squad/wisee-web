import { Plus } from "lucide-react"
import Head from "next/head"
import Link from "next/link"

import { Button } from "@/components"
import { Navbar } from "@/components/navbar"

import { DashboardHeader, FormCard } from "./components"

export const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <main className="w-ful flex h-screen">
                <Navbar />

                <section className="h-full w-full flex-1 overflow-auto bg-white px-6 pb-24">
                    <DashboardHeader className="pb-8 pt-4" />

                    <div className="space-y-2 pb-8 lg:space-y-1 lg:px-4 lg:pb-12">
                        {new Array(10).fill(0).map((_, i) => (
                            <FormCard key={i} id={2} status="draft" title="hello" updated_at="12hours ago" />
                        ))}
                    </div>

                    <div className="-mx-4 lg:mx-0 lg:px-6">
                        <Button asChild variant="ghost" size="lg" className="px-4 text-2xl [&>svg]:h-7 [&>svg]:w-7">
                            <Link
                                href="/create"
                                className="flex w-max items-center gap-2 rounded-lg px-3 py-2 text-stone-300 transition hover:bg-stone-100 hover:text-stone-400"
                            >
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

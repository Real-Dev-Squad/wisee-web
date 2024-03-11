import { Plus } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components'
import { Navbar } from '@/components/navbar'

import { DashboardHeader, FormCard } from './components'

export const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <main className="w-ful flex h-screen bg-stone-50">
                <Navbar />

                <section className="h-full w-full flex-1 overflow-auto bg-white px-4">
                    <DashboardHeader className="pb-5 pt-4" />

                    <div className="space-y-1 px-4 pb-16">
                        {new Array(5).fill(0).map((_, i) => (
                            <FormCard
                                key={i}
                                id={2}
                                status="draft"
                                title="hello"
                                updated_at="12hours ago"
                            />
                        ))}
                    </div>

                    <div className="px-6">
                        <Button
                            asChild
                            variant="ghost"
                            size="lg"
                            className="px-4 text-2xl [&>svg]:h-7 [&>svg]:w-7"
                        >
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

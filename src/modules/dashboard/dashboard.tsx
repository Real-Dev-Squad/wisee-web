import { useQuery } from "@tanstack/react-query"
import { FilePlus, Plus, PlusIcon } from "lucide-react"
import Link from "next/link"

import { FormBuilderApi } from "@/api/form-builder/form-builder.api"
import { Button } from "@/components"
import { GenericError } from "@/components/generic-error/generic-error"
import { Shimmer } from "@/components/shimmer"

import { DashboardTemplate } from "../common/tempaltes/dashboard-template"

import { DashboardHeader, FormCard } from "./components"

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-4 w-max rounded-lg bg-stone-100 p-2 text-stone-700">
                <FilePlus className="h-10 w-10" strokeWidth={1.5} />
            </div>

            <h3 className="pb-1 text-lg font-semibold text-stone-800">No forms yet</h3>
            <p className="pb-5 text-center text-sm text-stone-500">Looks empty here, let&apos;s create a new form.</p>
            <Button size="sm">
                <PlusIcon />
                Create form
            </Button>
        </div>
    )
}

export const Dashboard = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["FormBuilderApi.getAllForms"],
        queryFn: FormBuilderApi.getAllForms,
    })

    const appName = process.env.NEXT_PUBLIC_APP_NAME
    const pageTitle = `Dashboard - ${appName}`

    if (isLoading) {
        return (
            <DashboardTemplate title={pageTitle}>
                <section className="w-full p-6">
                    <div className="flex items-center gap-2 pb-8">
                        <Shimmer className="h-8 w-24 lg:hidden" />
                        <Shimmer className="ml-auto h-8 w-full lg:h-9 lg:w-72" />
                        <Shimmer className="h-8 w-11 shrink-0 lg:h-9 lg:w-32" />
                    </div>

                    <div className="space-y-2">
                        {new Array(5).fill(0).map((_, index) => (
                            <Shimmer key={index} className="h-20" />
                        ))}
                    </div>
                </section>
            </DashboardTemplate>
        )
    }

    if (isError) {
        return (
            <DashboardTemplate title={pageTitle}>
                <h1 className="p-6 text-xl font-semibold">{appName}</h1>
                <section className="grid w-full flex-1 place-items-center p-6">
                    <GenericError />
                </section>
            </DashboardTemplate>
        )
    }

    if (!data?.data.length) {
        return (
            <DashboardTemplate title={pageTitle}>
                <h1 className="p-6 text-xl font-semibold">{appName}</h1>

                <section className="grid w-full flex-1 place-items-center p-6">
                    <EmptyState />
                </section>
            </DashboardTemplate>
        )
    }

    return (
        <DashboardTemplate title={pageTitle}>
            <section className="h-full w-full flex-1 overflow-auto bg-white px-6 pb-24">
                <DashboardHeader className="pb-8 pt-4" />

                <div className="space-y-2 pb-8 lg:space-y-1 lg:px-4 lg:pb-12">
                    {data?.data.map((form) => (
                        <FormCard
                            key={form.id}
                            id={form.id}
                            status={form.status}
                            title={
                                form.content.blocks.find((block) => block.type === "FORM_TITLE")?.content ??
                                "Untitled Form"
                            }
                            updated_at={form.updated_at}
                        />
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
        </DashboardTemplate>
    )
}

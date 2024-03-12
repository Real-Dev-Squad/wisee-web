import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import Link from "next/link"

import { FormBuilderApi } from "@/api/form-builder/form-builder.api"
import { Button } from "@/components"
import { GenericError } from "@/components/generic-error/generic-error"
import { Shimmer } from "@/components/shimmer"

import { DashboardTemplate } from "../common/tempaltes/dashboard-template"

import { DashboardHeader, FormCard } from "./components"

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
                        <Shimmer className="w-24" />
                        <Shimmer className="flex-1" />
                        <Shimmer className="w-11 shrink-0" />
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
                <section className="grid w-full place-items-center p-6">
                    <GenericError />
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

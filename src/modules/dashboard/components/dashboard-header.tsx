import { Plus } from "lucide-react"

import { Button, Input } from "@/components"
import { cn } from "@/utils/classname"

type Props = {
    className?: string
}

export const DashboardHeader = ({ className }: Props) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME

    return (
        <div data-testid="dashboardHeader" className={cn("flex items-center justify-end gap-2 lg:gap-4", className)}>
            <h1 className="pr-8 text-2xl font-semibold text-stone-900 lg:hidden">{appName}</h1>

            <Input placeholder="Search" className="h-8 w-full lg:h-9 lg:w-72" />

            <Button size="sm" className="shrink-0">
                <Plus /> <span className="hidden lg:inline-block">Create Form</span>
            </Button>
        </div>
    )
}

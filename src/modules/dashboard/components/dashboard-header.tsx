import { Plus } from "lucide-react"

import { Button, Input } from "@/components"
import { cn } from "@/utils/classname"

type Props = {
    className?: string
}

export const DashboardHeader = ({ className }: Props) => {
    return (
        <div data-testid="dashboard_header" className={cn("flex items-center justify-end gap-4", className)}>
            <Input placeholder="Search" className="w-72" />
            <Button size="sm" className="shrink-0">
                <Plus /> Create Form
            </Button>
        </div>
    )
}

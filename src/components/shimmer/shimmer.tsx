import { cn } from "@/utils/classname"

type Props = {
    className?: string
}

export const Shimmer = ({ className }: Props) => {
    return <div className={cn("h-12 w-full animate-pulse rounded-lg bg-stone-200", className)}></div>
}

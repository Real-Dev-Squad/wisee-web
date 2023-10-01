import { cn } from "@/utils/classname"

type Props = {
    className?: string
    onClick?: () => void
    children: React.ReactNode
}

export const Button = ({ children, className, onClick, }: Props) => {
    return (
        <button className={cn("flex items-center py-2 px-4 bg-gray-800 text-white shadow", className)} onClick={onClick}>
            {children}
        </button>
    )
}

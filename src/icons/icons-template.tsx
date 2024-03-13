import { cn } from "@/utils/classname"

import { TIcon } from "../types/icon.type"

export const IconsTemplate = ({ className, children, viewBox, ...props }: TIcon) => {
    return (
        <svg className={cn(className)} viewBox={viewBox ? viewBox : "0 0 24 24"} fill="none" {...props}>
            {children}
        </svg>
    )
}

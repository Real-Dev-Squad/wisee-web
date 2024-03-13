import { useRouter } from "next/router"

import { ZeroConfigIcon } from "@/icons/outline/zero-config.icon"

import { Button } from ".."

type Props = {
    title?: string
    reloadCtaText?: string
}

export const GenericError = ({ title, reloadCtaText }: Props) => {
    const { reload } = useRouter()
    const genericErrorTitle = title ?? "Something went wrong"
    const ctaText = reloadCtaText ?? "Reload page"

    return (
        <div className="flex flex-col items-center space-y-3">
            <div className="pb-2">
                <div className="grid w-max place-items-center rounded-full bg-stone-100 p-5">
                    <ZeroConfigIcon className="h-8 w-8 stroke-1 text-stone-400" />
                </div>
            </div>

            <p className="text-xl font-semibold text-stone-800 lg:text-2xl">{genericErrorTitle}</p>
            <Button size="sm" variant="secondary" onClick={reload}>
                {ctaText}
            </Button>
        </div>
    )
}

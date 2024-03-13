import dayjs from "dayjs"
import Link from "next/link"

import { TForm } from "@/api/form-builder/form-builder.types"
import { DateTimeFormatEnum } from "@/enums/datetime-format.enum"
import { ROUTES } from "@/routes"
import { formatRoute } from "@/utils/format-route/format-route.util"

type Props = Pick<TForm, "id" | "status" | "updated_at"> & {
    title: string // TODO: @yesyash - add this to api response
}

export const FormCard = ({ id, title, status, updated_at }: Props) => {
    return (
        <div
            data-testid="formCard"
            className="cursor-default space-y-1 rounded-lg py-2 transition lg:px-6 lg:py-4 lg:hover:bg-stone-100"
        >
            <div className="flex items-center gap-2 lg:gap-4">
                <Link
                    href={formatRoute(ROUTES.forms.edit, { id })}
                    className="text-xl font-semibold text-stone-950 lg:text-2xl"
                >
                    {title}
                </Link>

                <span className="rounded bg-stone-100 px-1 py-0.5 text-xs font-semibold  uppercase text-stone-500 lg:px-2 lg:py-1">
                    {status}
                </span>
            </div>

            <p data-testid="updatedAtTime" className="text-sm text-stone-400">
                {dayjs(updated_at).format(DateTimeFormatEnum.ddMmYyyWithSlash)}
            </p>
        </div>
    )
}

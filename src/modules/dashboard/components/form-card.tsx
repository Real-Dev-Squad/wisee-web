import Link from "next/link"

import { TForm } from "@/api/form-builder/form-builder.types"
import { ROUTES } from "@/routes"
import { formatRoute } from "@/utils/format-route/form-route.util"

type Props = Pick<TForm, "id" | 'status' | 'updated_at'> & {
    title: string // TODO: @yesyash - add this to api response
}

export const FormCard = ({ id, title, status, updated_at }: Props) => {
    return (
        <div data-testid="form_card" className="space-y-1 py-5 px-6 hover:bg-stone-100 transition rounded-lg cursor-default">
            <div className="flex items-center gap-4">
                <Link href={formatRoute(ROUTES.forms.edit, { id })} className="text-2xl text-stone-950 font-semibold">
                    {title}
                </Link>

                <span className="uppercase text-xs text-stone-500 rounded bg-stone-100 font-semibold px-2 py-1">{status}</span>
            </div>

            <p className="text-stone-400 text-sm">{updated_at}</p>
        </div>
    )
}

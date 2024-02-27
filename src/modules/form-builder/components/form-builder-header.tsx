import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

import { FormBuilderApi } from "@/api/form-builder/form-builder.api"
import { CreateFromRequestDto } from "@/api/form-builder/form-builder.dto"
import { TFormBlock } from "@/api/form-builder/form-builder.types"
import { Button } from "@/components"
import { queryClient } from "@/providers/client-provider"
import { ROUTES } from "@/routes"

import { useFormBuilderStore } from "../store"

export const FormBuilderHeader = () => {
    const router = useRouter()
    const blocks = useFormBuilderStore(state => state.blocks)

    const createFormMutation = useMutation({
        mutationFn: FormBuilderApi.createForm,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['FormBuilderApi.getAllForms'] })
            router.push(ROUTES.forms.root)
        },
        onError: (e) => {
            console.error(e.message, "unable to create form")
        }
    })

    const createForm = () => {
        const body: CreateFromRequestDto = {
            content: {
                blocks: blocks.map<TFormBlock>((item, index) => ({
                    group_id: item.id,
                    content: item.payload.data,
                    id: item.id,
                    order: index,
                    type: item.type,
                }))
            },
            performed_by_id: 3
        }

        createFormMutation.mutate(body)
    }

    return (
        <header className="fixed inset-0 bg-white h-max">
            <div className="flex items-center max-w-screen-2xl px-6 py-2">
                <h3 className="text-lg font-semibold">{process.env.NEXT_PUBLIC_APP_NAME}</h3>

                <div className="ml-auto">
                    <Button loading={createFormMutation.isPending} variant="ghost" onClick={createForm}>Publish</Button>
                </div>
            </div>
        </header>
    )
}

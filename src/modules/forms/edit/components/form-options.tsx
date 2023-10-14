
import { Listbox } from "@headlessui/react"

import { cn } from "@/utils/classname"

type TFormOption = {
    id: string
    value: string
}

type Props = {
    open: boolean
    value: string
    options: TFormOption[]
    onChange: (value: string) => void
}

export const FormOptions = ({ value, options, open, onChange }: Props) => {
    return (
        <Listbox value={value} onChange={onChange}>
            <>
                {open && (

                    <div autoFocus className={cn(
                        "absolute max-h-60 w-full max-w-sm overflow-auto rounded-md bg-whit",
                        "text-base shadow-lg shadow-stone-200 border border-stone-200"
                    )}>
                        <Listbox.Options static>
                            {options.map(option =>
                                <Listbox.Option
                                    key={option.id}
                                    value={option.value}
                                    className={cn(
                                        "py-2 px-4 text-stone-700 font-medium text-sm",
                                        "hover:bg-stone-100 focus:bg-stone-100"
                                    )}
                                >
                                    {option.value}
                                </Listbox.Option>
                            )}
                        </Listbox.Options>
                    </div>
                )}
            </>
        </Listbox>
    )
}

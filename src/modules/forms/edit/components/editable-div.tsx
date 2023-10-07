import { useState } from "react"

import { cn } from "@/utils/classname"

import { KeyCodeEnum } from "../enums"
import { useEditFormStore } from "../store"
import { TBlock } from "../types/edit-form-types"
import { setFocusToNewBlock } from "../utils"

type EditableDivProps = Pick<React.DOMAttributes<HTMLDivElement>, "onInput" | "onKeyDown"> & TBlock & {
    placeholder?: string
    className?: string
    onDelete?: () => void // Make this required?
}

export const EditableDiv = ({ id, className, placeholder, onInput, onKeyDown, onDelete }: EditableDivProps) => {
    const [prevKey, setPrevKey] = useState("")
    const { addBlock } = useEditFormStore((state) => ({ addBlock: state.addBlock }))

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const currentValue = e.currentTarget.innerText
        const isPrevKeyShift = prevKey === KeyCodeEnum.SHIFT

        if (e.key === KeyCodeEnum.ENTER && !isPrevKeyShift) {
            e.preventDefault()
            const elements = document.querySelectorAll("[contenteditable]")
            const currentElementIndex = Array.from(elements).findIndex((el) => el.id === id);
            const newBlockPosition = currentElementIndex + 1

            setPrevKey(e.key)
            addBlock(newBlockPosition)
            setFocusToNewBlock(newBlockPosition)
            return
        }

        if (currentValue.length === 0 && e.key === KeyCodeEnum.BACKSPACE) {
            e.preventDefault()

            setPrevKey(e.key)
            onDelete && onDelete()
        }

        onKeyDown && onKeyDown(e)
        setPrevKey(e.key)
    }

    return (
        <div
            id={id}
            contentEditable
            tabIndex={0}
            autoFocus
            placeholder={placeholder}
            className={cn(
                "text-base relative outline-none whitespace-pre-wrap break-words text-stone-900 caret:text-stone-900 cursor-text",
                "before:content-[attr(placeholder)] before:text-stone-400 before:absolute",
                "focus:empty:before:block before:hidden",
                className
            )}
            onKeyDown={handleKeyDown}
            onInput={onInput}
        />
    )
}

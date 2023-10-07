import { useState } from "react"

import { cn } from "@/utils/classname"

import { BlockTypeEnum, KeyCodeEnum } from "../enums"
import { useEditFormStore } from "../store"
import { TBlock } from "../types/edit-form-types"
import { setBlockInFocus } from "../utils"

type EditableDivProps = Pick<React.DOMAttributes<HTMLDivElement>, "onInput" | "onKeyDown"> & TBlock & {
    placeholder?: string
    className?: string
    onDelete?: () => void // Make this required?
}

export const EditableDiv = ({ id, type, className, placeholder, onInput, onKeyDown, onDelete }: EditableDivProps) => {
    const [prevKey, setPrevKey] = useState("")
    const { addBlock, totalBlocks } = useEditFormStore((state) => ({ addBlock: state.addBlock, totalBlocks: state.blocks.length }))

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const currentValue = e.currentTarget.innerText
        const isPrevKeyShift = prevKey === KeyCodeEnum.SHIFT

        if (e.key === KeyCodeEnum.ENTER && !isPrevKeyShift) {
            e.preventDefault()
            const elements = document.querySelectorAll("[contenteditable]")
            const currentElementIndex = Array.from(elements).findIndex((el) => el.id === id);

            if (currentElementIndex === -1) {
                return
            }

            const newBlockPosition = currentElementIndex === -1 ? 0 : currentElementIndex + 1

            setPrevKey(e.key)
            addBlock(newBlockPosition)
            setBlockInFocus(newBlockPosition)
            return
        }

        if (currentValue.length === 0 && e.key === KeyCodeEnum.BACKSPACE && type !== BlockTypeEnum.FORM_TITLE) {
            e.preventDefault()

            setPrevKey(e.key)
            onDelete && onDelete()
        }

        if (e.key === KeyCodeEnum.ARROW_UP) {
            const elements = document.querySelectorAll("[contenteditable]")
            const currentElementIndex = Array.from(elements).findIndex((el) => el.id === id);

            if (currentElementIndex === -1) {
                return
            }

            const newBlockPosition = currentElementIndex === 0 ? 0 : currentElementIndex - 1

            setPrevKey(e.key)
            setBlockInFocus(newBlockPosition)
        }

        if (e.key === KeyCodeEnum.ARROW_DOWN) {
            const elements = document.querySelectorAll("[contenteditable]")
            const currentElementIndex = Array.from(elements).findIndex((el) => el.id === id);

            if (currentElementIndex === -1) {
                return
            }

            const newBlockPosition = currentElementIndex === totalBlocks - 1 ? currentElementIndex : currentElementIndex + 1

            setPrevKey(e.key)
            setBlockInFocus(newBlockPosition)
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
                type === BlockTypeEnum.FORM_TITLE && "pb-8",
                className
            )}
            onKeyDown={handleKeyDown}
            onInput={onInput}
        />
    )
}

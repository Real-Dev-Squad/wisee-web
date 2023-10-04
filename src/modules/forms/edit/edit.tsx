import { useState } from "react"

import { nanoid } from "nanoid"
import Head from "next/head"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { cn } from "@/utils/classname"

import { EditPageHeader } from "./components"
import { EditFormModeEnum } from "./enums"

enum KeyCodeEnum {
    SHIFT_LEFT = "ShiftLeft",
    SHIFT_RIGHT = "ShiftRight",
    ENTER = "Enter",
}

type EditableDivProps = Pick<React.DOMAttributes<HTMLDivElement>, "onInput" | "onKeyDown"> & {
    placeholder?: string
    className?: string
    onEnter?: () => void
}

const EditableDiv = ({ className, placeholder, onInput, onKeyDown, onEnter }: EditableDivProps) => {
    const [prevKey, setPrevKey] = useState("")

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const isPrevKeyShift = prevKey === KeyCodeEnum.SHIFT_LEFT || prevKey === KeyCodeEnum.SHIFT_RIGHT

        if (e.code === KeyCodeEnum.ENTER && !isPrevKeyShift) {
            e.preventDefault()

            setPrevKey(e.code)
            onEnter && onEnter()

            return
        }

        onKeyDown && onKeyDown(e)
        setPrevKey(e.code)
    }

    return (
        <div
            contentEditable
            placeholder={placeholder || "Type something..."}
            className={cn(
                "w-max text-base outline-none whitespace-pre-wrap break-words text-stone-900 caret:text-stone-900 cursor-text",
                "before:content-[attr(placeholder)] before:hidden before:transition before:text-stone-400 empty:before:block",
                className
            )}
            onKeyDown={handleKeyDown}
            onInput={onInput}
        />
    )
}

enum BlockTypeEnum {
    FORM_TITLE = "FORM_TITLE",
    TEXT = "TEXT",
}

type TBlock = {
    id: string
    type: BlockTypeEnum
    payload: string
}

type TBlocksStore = {
    blocks: TBlock[]
    upsertBlock: (block: TBlock) => void
    removeBlock: (blockId: string) => void
}

const useFormBlocks = create<TBlocksStore>()(devtools((set) => ({
    blocks: [] as TBlock[],
    upsertBlock: (block) => set((state) => {
        const blockIndex = state.blocks.findIndex((b) => b.id === block.id)
        if (blockIndex === -1) {
            block.id = nanoid()

            return {
                blocks: [...state.blocks, block]
            }
        }

        const blocks = [...state.blocks]
        blocks[blockIndex] = block

        return { blocks }
    }),
    removeBlock: (blockId) => set((state) => ({ blocks: state.blocks.filter(b => b.id !== blockId) })),
}), { enabled: true, name: "useFormBlocks" })) // TODO: @yesyash - Disable the devtools middleware in production

type PageProps = {
    mode: EditFormModeEnum
}

export const Edit = ({ mode }: PageProps) => {
    const { blocks, upsertBlock } = useFormBlocks((state) => ({ blocks: state.blocks, upsertBlock: state.upsertBlock }))

    const pageTitle = mode === EditFormModeEnum.CREATE_WITHOUT_LOGIN ? "Create form" : "Edit form"

    const titleBlock = blocks.find((b) => b.type === BlockTypeEnum.FORM_TITLE)
    const nonTitleBlocks = blocks.filter((b) => b.type !== BlockTypeEnum.FORM_TITLE)

    return (
        <>
            <Head>
                <title>{pageTitle} — {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <EditPageHeader />

            <main>
                <div className="pt-14 h-44 w-full"></div>
                <div className="max-w-screen-lg px-4 mx-auto">
                    <div className="mb-6">
                        <EditableDiv
                            placeholder="Form title"
                            className="text-4xl font-bold"
                            onEnter={() => {
                                upsertBlock({
                                    id: "",
                                    payload: "",
                                    type: BlockTypeEnum.TEXT,
                                })
                            }}
                            onInput={(e) => {
                                const block: TBlock = {
                                    type: BlockTypeEnum.FORM_TITLE,
                                    id: titleBlock?.id || "",
                                    payload: e.currentTarget.innerText,
                                }

                                upsertBlock(block)
                            }}
                        />
                    </div>

                    {nonTitleBlocks.map(block => (
                        <EditableDiv key={block.id} className="mb-2" onEnter={() => {
                            upsertBlock({
                                id: "",
                                payload: "",
                                type: BlockTypeEnum.TEXT,
                            })
                        }} />
                    ))}

                </div>
            </main>
        </>
    )
}

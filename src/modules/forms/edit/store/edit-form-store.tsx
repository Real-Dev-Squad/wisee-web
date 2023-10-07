import { nanoid } from "nanoid"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { BlockTypeEnum } from "../enums"
import { TBlock } from "../types/edit-form-types"
import { setBlockInFocus } from "../utils"

const DEFAULT_BLOCKS: TBlock[] = [
    // Using nanoId here causes an issue as the id becomes different on server and client
    { id: "form_title", payload: "", type: BlockTypeEnum.FORM_TITLE },
]

type TBlocksStore = {
    blocks: TBlock[]
    editBlock: (block: TBlock) => void
    addBlock: (position: number) => void
    removeBlock: (blockId: string) => void
}

export const useEditFormStore = create<TBlocksStore>()(devtools((set) => ({
    blocks: DEFAULT_BLOCKS,
    editBlock: (block) => set((state) => {
        const blockIndex = state.blocks.findIndex((b) => b.id === block.id)

        if (blockIndex === -1) {
            return state
        }

        const blocks = [...state.blocks]
        blocks[blockIndex] = block

        return { blocks }
    }),
    addBlock: (position) => set((state) => {
        const newBlock = {
            id: nanoid(),
            payload: "",
            type: BlockTypeEnum.TEXT,
        }

        const blocks = [...state.blocks]
        console.log(position)
        blocks.splice(position, 0, newBlock)

        return { blocks }
    }),
    removeBlock: (blockId) => set((state) => {
        const elements = document.querySelectorAll("[contenteditable]")
        const currentElementIndex = Array.from(elements).findIndex((el) => el.id === blockId);
        if (currentElementIndex === -1) {
            return state
        }

        const previousElementIndex = currentElementIndex === 0 ? 0 : currentElementIndex - 1

        setBlockInFocus(previousElementIndex)

        return { blocks: state.blocks.filter(b => b.id !== blockId) }
    }),
}), { enabled: true, name: "useFormBlocks" })) // TODO: @yesyash - Disable the devtools middleware in production

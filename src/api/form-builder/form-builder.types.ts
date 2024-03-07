export type TFormBlock = {
    id: string;
    type: string;
    content: string;
    group_id: string;
    order: number;
    meta?: unknown; // TODO: @yesyash -  pick the correct type from erd diagram
};

export type TFormContent = {
    blocks: TFormBlock[];
};

export type TForm = {
    id: number;
    content: TFormContent;
    owner_id: number;
    created_by_id: number;
    status: string; // TODO: @yesyash -  pick the correct enum from erd diagram
    updated_by_id: number;
    created_at: string;
    updated_at: string;
};

export type TFormContent = {
  blocks: TFormBlock[];
};

export type TFormBlock = {
  id: string;
  type: string;
  content: string;
  group_id: string;
  order: number;
  meta: unknown; // TODO: @yesyash -  pick the correct type from erd diagram
};

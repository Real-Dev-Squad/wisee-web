import { CommonResponseDto } from "../common/common.dto";

import { TForm, TFormContent } from "./form-builder.types";

export type GetAllFormsResponseDto = CommonResponseDto<TForm[]>;

export type CreateFromRequestDto = {
    content: TFormContent;
    performed_by_id: number;
};

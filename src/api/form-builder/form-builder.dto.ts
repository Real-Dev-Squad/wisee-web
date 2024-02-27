import { CommonResponseDto } from "../common/common.dto";

import { TFormContent } from "./form-builder.types";

export type FromDto = {
  id: number;
  content: TFormContent;
  owner_id: number;
  created_by_id: number;
  status: string; // TODO: @yesyash -  pick the correct enum from erd diagram
  updated_by_id: number;
  created_at: string;
  updated_at: string;
};

export type GetAllFormsResponseDto = CommonResponseDto<FromDto>;

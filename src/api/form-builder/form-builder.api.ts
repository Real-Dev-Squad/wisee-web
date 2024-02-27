import { client } from "@/utils/client.util";

import { GetAllFormsResponseDto } from "./form-builder.dto";

export class FormBuilderApi {
  public static async getAllForms(): Promise<GetAllFormsResponseDto> {
    const { data } = await client().get("v1/forms");
    return data;
  }
}

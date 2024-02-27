import { client } from "@/utils/client.util";

import { CreateFromRequestDto, GetAllFormsResponseDto } from "./form-builder.dto";

export class FormBuilderApi {
    public static async getAllForms(): Promise<GetAllFormsResponseDto> {
        const { data } = await client().get("v1/forms");
        return data;
    }

    public static async createForm(body: CreateFromRequestDto): Promise<number> {
        const { status } = await client().post("v1/forms", body);
        return status;
    }
}

import { FormFieldValueType } from "@prisma/client";

export type FormField = {
    key: string,
    name: string,
    category: string,
    valueType: FormFieldValueType
    isCalculated?: boolean

}
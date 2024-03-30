

export enum FormFieldValueType {
    TEXT = 'TEXT',
    NUMBER = "NUMBER",
    DATE = "DATE",
    BOOLEAN = "BOOLEAN",
    SINGLE_CHOICE = "SINGLE_CHOICE",
    MULTIPLE_CHOICE = "MULTI_CHOICE"
}

export type FormField = {
    key: string,
    name: string,
    generalCategory: string,
    specificCategory?: string,
    valueType: FormFieldValueType,
    isCalculated?: boolean,
    description?: String
    choice?: string[]

}
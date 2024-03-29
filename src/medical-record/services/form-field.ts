import { FormField, FormFieldValueType } from "../dto/form-field";


const formFields: FormField[] = [
    {
        key: 'NUMBER_OF_DECOMPOSITION',
        name: 'Nombre de décompensation',
        generalCategory: 'ANTECEDENTS PERSONNELS',
        valueType: FormFieldValueType.TEXT

    },
    {
        key: 'CARDIOTHORACIC_INDEX',
        name: 'Index cardiothoracique (en%)',
        generalCategory: 'TELECOEUR',
        valueType: FormFieldValueType.NUMBER

    },
    {
        key: 'HEMOGLOBINEMIA',
        name: 'Hémoglobinémie',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT

    },
    {
        key: 'PLATES',
        name: 'Plaquettes',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT

    }
]
export default formFields;
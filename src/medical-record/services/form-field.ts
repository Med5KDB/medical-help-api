import { FormFieldValueType } from "@prisma/client";
import { FormField } from "../dto/form-field";


const formFields: FormField[] = [
    {
        key: 'NUMBER_OF_DECOMPOSITION',
        name: 'Nombre de décompensation',
        category: 'ANTECEDENTS PERSONNELS',
        valueType: FormFieldValueType.TEXT

    },
    {
        key: 'CARDIOTHORACIC_INDEX',
        name: 'Index cardiothoracique (en%)',
        category: 'TELECOEUR',
        valueType: FormFieldValueType.NUMBER

    },
    {
        key: 'HEMOGLOBINEMIA',
        name: 'Hémoglobinémie',
        category: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT

    },
    {
        key: 'PLATES',
        name: 'Plaquettes',
        category: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT

    }
]
export default formFields;
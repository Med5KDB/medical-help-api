import { FormField, FormFieldValueType } from "../dto/form-field";


const formFields: FormField[] = [
    {
        key: 'FICHE_NUMBER',
        name: 'Numéro de la fiche',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'INITIALES',
        name: 'Initiales (N/P)',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'MARITAL_STATUS',
        name: 'Statut matrimonial',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Marié(e)', 'Divorcé(e)', 'Célibataire', 'Veuf(ve)']
    },
    {
        key: 'AGE',
        name: 'Âge (en années)',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.NUMBER
    },
    {
        key: 'ADDRESS',
        name: 'Adresse',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'PHONE_NUMBER',
        name: 'Téléphone',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'PROFESSION',
        name: 'Profession',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'SOCIOECONOMIC_LEVEL',
        name: 'Niveau socioéconomique',
        generalCategory: 'ASPECTS SOCIO-DEMOGRAPHIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'MEDICAL_HISTORY',
        name: 'Antécédents médicaux',
        generalCategory: 'ANTECEDENTS PERSONNELS',
        valueType: FormFieldValueType.MULTIPLE_CHOICE,
        choice: ['HTA-Gravidique : OUI / NON', 'Autres :']
    },
    {
        key: 'GYNECO_OBSTETRIC_HISTORY',
        name: 'Antécédents gynéco-obstétricaux',
        generalCategory: 'ANTECEDENTS PERSONNELS',
        valueType: FormFieldValueType.TEXT,
        choice: ['Ménarche', 'Gestité', 'Parité', 'Grossesses gémellaires']
    },
    {
        key: 'DECOMPENSATION_DURING_PREGNANCY',
        name: 'ATCD de décompensation durant la dernière grossesse',
        generalCategory: 'ANTECEDENTS PERSONNELS',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'HOSPITALIZATIONS',
        name: 'Hospitalisations antérieures',
        generalCategory: 'ANTECEDENTS PERSONNELS',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui']
    }, {
        key: 'EXERTION_DYSPNEA',
        name: 'Dyspnée d\'effort',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['TypeI', 'TypeII']
    },
    {
        key: 'PULMONARY_EDEMA',
        name: 'Œdème aigu du poumon',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'COUGH',
        name: 'Toux',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'PALPITATIONS',
        name: 'Palpitations',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'OMI',
        name: 'OMI',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'CONSTANTS',
        name: 'Constantes',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'CARDIAC_MURMUR',
        name: 'Souffle cardiaque',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'TSVJ',
        name: 'TSVJ',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['IA', 'RA', 'IP', 'RP']
    },
    {
        key: 'HEPATOMEGALY',
        name: 'Hépatomégalie',
        generalCategory: 'SIGNES CLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },

    // SIGNES PARACLINIQUES
    {
        key: 'BIOLOGIE',
        name: 'BIOLOGIE',
        generalCategory: 'SIGNES PARACLINIQUES',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'TELECOEUR',
        name: 'TELECOEUR',
        generalCategory: 'SIGNES PARACLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'ECG',
        name: 'ECG',
        generalCategory: 'SIGNES PARACLINIQUES',
        valueType: FormFieldValueType.SINGLE_CHOICE,
        choice: ['Oui', 'Non']
    },
    {
        key: 'HEMOGLOBINEMIA',
        name: 'Hémoglobinémie',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'WHITE_BLOOD_CELLS',
        name: 'GB',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'PLATELETS',
        name: 'Plaquettes',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'VGM',
        name: 'VGM',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'CCMH',
        name: 'CCMH',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'TCMH',
        name: 'TCMH',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'CRP',
        name: 'CRP',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'UREA',
        name: 'Urée',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'CREATININEMIA',
        name: 'Créatininémie',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'NT_PRO_BNP',
        name: 'NT pro BNP',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },
    {
        key: 'PROLACTIN',
        name: 'Prolactine',
        generalCategory: 'BIOLOGIE',
        valueType: FormFieldValueType.TEXT
    },

    // TELECOEUR
    {
        key: 'CARDIOTHORACIC_INDEX',
        name: 'Index cardiothoracique (en%)',
        generalCategory: 'TELECOEUR',
        valueType: FormFieldValueType.NUMBER
    },

    // ECG
    {
        key: 'ECG_RESULTS',
        name: 'Résultats',
        generalCategory: 'ECG',
        valueType: FormFieldValueType.MULTIPLE_CHOICE,
        choice: ['Sinusal', 'Tachycardie', 'Troubles conductifs', 'HAG', 'HVG', 'HAD', 'HVD', 'FA', 'fa']
    },

];

export default formFields;

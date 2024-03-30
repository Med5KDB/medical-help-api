import { FormField } from '../dto/form-field';
import formFields from './form-field';

export class FormFieldService {
    find(): { data: FormField[] } {
        return {
            data: formFields,
        };
    }
}
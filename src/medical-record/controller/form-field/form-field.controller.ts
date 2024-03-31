import { Controller, Get } from '@nestjs/common';
import { FormField } from 'src/medical-record/dto/form-field';
import { FormFieldService } from 'src/medical-record/services/form-field.service';

@Controller('formField')
export class FormFieldController {
  constructor(private readonly formFieldService: FormFieldService) {}

  @Get()
  async allFormFields(): Promise<FormField[]> {
    const result = await this.formFieldService.find();
    return result.data;
  }
}

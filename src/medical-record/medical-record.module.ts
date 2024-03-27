import { Module } from '@nestjs/common';
import { FormFieldController } from './controller/form-field/form-field.controller';
import { FormFieldService } from './services/form-field.service';

@Module({
  controllers: [FormFieldController],
  providers: [FormFieldService]
})
export class MedicalRecordModule { }

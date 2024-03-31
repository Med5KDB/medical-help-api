import { Module } from '@nestjs/common';
import { FormFieldController } from './controller/form-field/form-field.controller';
import { FormFieldService } from './services/form-field.service';
import { MedicalRecordController } from './controller/medical-record/medical-record.controller';
import { MedicalRecordService } from './services/medical-record.service';
import { PrismaService } from 'src/lib/prisma.service';

@Module({
  controllers: [FormFieldController, MedicalRecordController],
  providers: [FormFieldService, MedicalRecordService, PrismaService],
})
export class MedicalRecordModule {}

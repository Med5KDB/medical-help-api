import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { MedicalAssistantModule } from './medical-assistant/medical-assistant.module';
import { HospitalModule } from './hospital/hospital.module';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [DoctorModule, PatientModule, MedicalAssistantModule, MedicineModule, HospitalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { MedicalAssistantService } from './medical-assistant.service';
import { MedicalAssistantController } from './medical-assistant.controller';
import { PrismaService } from '../lib/prisma.service';

@Module({
  controllers: [MedicalAssistantController],
  providers: [MedicalAssistantService, PrismaService],
})
export class MedicalAssistantModule {}

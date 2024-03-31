import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { PrismaService } from '../lib/prisma.service';

@Module({
  controllers: [MedicineController],
  providers: [MedicineService, PrismaService],
})
export class MedicineModule {}

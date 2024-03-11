import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Res,
  Put,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient, Prisma } from '@prisma/client';
import { Response } from 'express';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() data: Prisma.PatientCreateInput): Promise<Patient> {
    return this.patientService.createPatient(data);
  }

  @Get()
  async patients(
    @Query('sort') sort: string,
    @Query('range') range: string,
    @Res() response: Response,
  ): Promise<Patient[]> {
    const parsedSort = JSON.parse(sort).map((item: string) => {
      const [field, order] = item.split(',');
      return { [field]: order };
    });
    const cleanedRange = range.replace('[', '').replace(']', '');

    const splittedRange = cleanedRange.split(',');
    const [start, end] = splittedRange;
    const rangeObj = { skip: parseInt(start), take: parseInt(end) };

    const patients = await this.patientService.findMany(parsedSort, rangeObj);
    response.set(
      'Content-Range',
      `patients 0-${patients.length}/${patients.length}`,
    );
    return patients;
  }

  @Get(':id')
  patient(@Param('id') id: string): Promise<Patient | null> {
    const args: Prisma.PatientFindUniqueArgs = { where: { id } };
    return this.patientService.findOne(args);
  }

  @Put(':id')
  async updatePatient(
    @Param('id') id: string,
    @Body() data: Prisma.PatientUpdateArgs['data'],
  ): Promise<Patient> {
    const args: Prisma.PatientUpdateArgs = { where: { id }, data };
    return await this.patientService.updateOne(args);
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.PatientDeleteArgs = { where: { id } };
    return await this.patientService.deleteOne(args);
  }
}

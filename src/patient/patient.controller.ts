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
  InternalServerErrorException,
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
    @Query('filter') filter: string,
  ) {
    try {
      const parsedSort = JSON.parse(sort);
      const parsedRange = JSON.parse(range);
      const parsedFilter = JSON.parse(filter);

      const sortArray = Array.isArray(parsedSort) ? parsedSort : [parsedSort];

      const field = sortArray[0];
      const order = sortArray[1];

      const skip = parsedRange[0];
      const take = parsedRange[1];

      const { patients, count } = await this.patientService.findMany(
        { field, order },
        { skip, take },
        parsedFilter,
      );
      const length = patients.length;
      response.set(
        'Content-Range',
        `patients ${skip}-${skip + length}/${count}`,
      );
      response.json(patients);
    } catch (error) {
      throw new InternalServerErrorException(
        `List patients failed due to ${error}`,
      );
    }
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

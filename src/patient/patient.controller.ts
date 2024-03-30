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
import { ListArgs } from 'src/lib/listArg';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) { }

  @Post()
  create(@Body() data: Prisma.PatientCreateInput): Promise<Patient> {
    return this.patientService.createPatient(data);
  }

  @Get()
  async patients(
    @Res() response: Response,
    @Query('sort') sort?: string,
    @Query('range') range?: string,
    @Query('filter') filter?: string,
  ) {
    try {
      const args: ListArgs = {
        field: sort ? JSON.parse(sort)[0] : undefined,
        order: sort ? JSON.parse(sort)[1] : undefined,
        skip: range ? JSON.parse(range)[0] : undefined,
        take: range ? JSON.parse(range)[1] : undefined,
      };
      const parsedFilter = filter ? JSON.parse(filter) : undefined;


      const { patients, count } = await this.patientService.findMany(
        parsedFilter,
        args
      );

      if (args.order) {
        const length = patients.length;
        response.set(
          'Content-Range',
          `patients ${args.skip}-${args.skip + length}/${count}`,
        );
      }

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

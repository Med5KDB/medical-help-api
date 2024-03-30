import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  Res,
  InternalServerErrorException,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor, Prisma } from '@prisma/client';
import { Response } from 'express';
import { ListArgs } from 'src/lib/listArg';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) { }

  @Post()
  async addDoctor(@Body() data: Prisma.DoctorCreateInput): Promise<Doctor> {
    return await this.doctorService.createDoctor(data);
  }

  @Get(':id')
  async doctor(@Param('id') id: string): Promise<Doctor | null> {
    const args: Prisma.DoctorFindUniqueArgs = { where: { id } };
    return await this.doctorService.findOne(args);
  }

  @Get()
  async doctors(
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


      const { doctors, count } = await this.doctorService.findMany(
        parsedFilter, args
      );

      if (args.order) {
        const length = doctors.length;
        response.set(
          'Content-Range',
          `doctors ${args.skip}-${args.skip + length}/${count}`,
        );
      }


      response.json(doctors);
    } catch (error) {
      throw new InternalServerErrorException(
        `List doctors failed due to ${error}`,
      );
    }
  }

  @Put(':id')
  async updateDoctor(
    @Param('id') id: string,
    @Body() data: Prisma.DoctorUpdateArgs['data'],
  ): Promise<Doctor> {
    const args: Prisma.DoctorUpdateArgs = { where: { id }, data };
    return await this.doctorService.updateOne(args);
  }
  @Delete(':id')
  async deleteDoctor(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.DoctorDeleteArgs = { where: { id } };
    const deletedDoctor = await this.doctorService.deleteOne(args);
    return deletedDoctor;
  }
}

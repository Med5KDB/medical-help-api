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

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

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
    @Query('sort') sort: string,
    @Query('range') range: string,
    @Query('filter') filter: string,
    @Res() response: Response,
  ): Promise<Doctor[]> {
    try {
      const parsedSort = JSON.parse(sort);
      const parsedRange = JSON.parse(range);
      const parsedFilter = JSON.parse(filter);

      // Ensure that sort is an array
      const sortArray = Array.isArray(parsedSort) ? parsedSort : [parsedSort];

      const field = sortArray[0];
      const order = sortArray[1];

      const skip = parsedRange[0];
      const take = parsedRange[1];

      const { doctors, count } = await this.doctorService.findMany(
        { field, order },
        { skip, take },
        parsedFilter,
      );
      const length = doctors.length;
      response.set(
        'Content-Range',
        `doctors ${skip}-${skip + length}/${count}`,
      );

      return doctors;
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
    return await this.doctorService.deleteOne(args);
  }
}

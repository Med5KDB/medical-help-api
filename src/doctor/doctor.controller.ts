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
    // @Query('filter') filter: Prisma.DoctorWhereInput,
    @Query('sort') sort: string,
    @Query('range') range: string,
    @Res() response: Response,
  ): Promise<Doctor[]> {
    const parsedSort = JSON.parse(sort).map((item: string) => {
      const [field, order] = item.split(',');
      return { [field]: order };
    });
    const cleanedRange = range.replace('[', '').replace(']', '');

    const splittedRange = cleanedRange.split(',');
    const [start, end] = splittedRange;
    const rangeObj = { skip: parseInt(start), take: parseInt(end) };

    const doctors = await this.doctorService.findMany(parsedSort, rangeObj);
    response.set(
      'Content-Range',
      `doctors 0-${doctors.length}/${doctors.length}`,
    );
    return doctors;
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

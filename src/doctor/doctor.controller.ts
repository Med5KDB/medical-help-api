import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor, Prisma } from '@prisma/client';

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
  async doctors(@Body() args: Prisma.DoctorFindManyArgs): Promise<Doctor[]> {
    return await this.doctorService.findMany(args);
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

import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
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
  doctor(@Param('id') id: string): Promise<Doctor | null> {
    const args: Prisma.DoctorFindUniqueArgs = { where: { id } };
    return this.doctorService.findOne(args);
  }

  @Get()
  doctors(@Body() args: Prisma.DoctorFindManyArgs): Promise<Doctor[]> {
    return this.doctorService.findMany(args);
  }

  @Put(':id')
  updateDoctor(
    @Param('id') id: string,
    @Body() args: Prisma.DoctorUpdateArgs,
  ): Promise<Doctor> {
    const where: Prisma.DoctorWhereUniqueInput = { id: id };
    return this.doctorService.updateOne(where, args);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Doctor, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}
  async createDoctor(data: Prisma.DoctorCreateInput): Promise<Doctor> {
    const doctor = await this.prisma.doctor.create({ data });
    return doctor;
  }
  async updateOne(args: Prisma.DoctorUpdateArgs): Promise<Doctor> {
    const updatedDoctor = await this.prisma.doctor.update({
      where: args.where,
      data: args.data,
    });
    return updatedDoctor;
  }
  async findOne(args: Prisma.DoctorFindUniqueArgs): Promise<Doctor | null> {
    const { id } = args.where;
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
    });
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }
    return doctor;
  }

  async findMany(args: Prisma.DoctorFindManyArgs): Promise<Doctor[]> {
    const doctors = await this.prisma.doctor.findMany(args);
    return doctors;
  }
  async deleteOne(args: Prisma.DoctorDeleteArgs): Promise<{ id: string }> {
    await this.prisma.doctor.delete({ where: args.where });
    return { id: args.where.id };
  }
}

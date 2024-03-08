import { Injectable, NotFoundException } from '@nestjs/common';
import { Doctor, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}
  createDoctor(data: Prisma.DoctorCreateInput): Promise<Doctor> {
    const doctor = this.prisma.doctor.create({ data });
    return doctor;
  }
  updateOne(args: Prisma.DoctorUpdateArgs): Promise<Doctor> {
    const updatedDoctor = this.prisma.doctor.update({
      where: args.where,
      data: args.data,
    });
    return updatedDoctor;
  }
  findOne(args: Prisma.DoctorFindUniqueArgs): Promise<Doctor | null> {
    const { id } = args.where;
    const doctor = this.prisma.doctor.findUnique({
      where: { id },
    });
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }
    return doctor;
  }

  findMany(args: Prisma.DoctorFindManyArgs): Promise<Doctor[]> {
    const doctors = this.prisma.doctor.findMany(args);
    return doctors;
  }
}

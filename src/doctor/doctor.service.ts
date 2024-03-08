import { Injectable } from '@nestjs/common';
import { Doctor, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}
  createDoctor(data: Prisma.DoctorCreateInput): Promise<Doctor> {
    const doctor = this.prisma.doctor.create({ data });
    return doctor;
  }
  updateOne(
    where: Prisma.DoctorWhereUniqueInput,
    args: Prisma.DoctorUpdateArgs,
  ): Promise<Doctor> {
    const updatedDoctor = this.prisma.doctor.update({ where, data: args.data });
    return updatedDoctor;
  }
  findOne(args: Prisma.DoctorFindUniqueArgs): Promise<Doctor> {
    const doctor = this.prisma.doctor.findUnique({
      where: { id: args.where.id },
    });
    return doctor;
  }
}

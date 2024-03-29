import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Doctor, Prisma } from '@prisma/client';
import { PrismaService } from '../lib/prisma.service';

@Injectable()
export class DoctorService {
  private readonly logger = new Logger(DoctorService.name);
  constructor(private prisma: PrismaService) {}
  async createDoctor(data: Prisma.DoctorCreateInput): Promise<Doctor> {
    try {
      const doctor = await this.prisma.doctor.create({ data });
      return doctor;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to create the Doctor because of: ${error}`,
      );
    }
  }
  async updateOne(args: Prisma.DoctorUpdateArgs): Promise<Doctor> {
    try {
      const updatedDoctor = await this.prisma.doctor.update({
        where: args.where,
        data: args.data,
      });
      return updatedDoctor;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to update the Doctor with the ID ${args.where.id} due to: ${error}`,
      );
    }
  }
  async findOne(args: Prisma.DoctorFindUniqueArgs): Promise<Doctor | null> {
    try {
      const { id } = args.where;
      const doctor = await this.prisma.doctor.findUnique({
        where: { id },
      });
      if (!doctor) {
        throw new NotFoundException(`Doctor with ID ${id} not found`);
      }
      return doctor;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to fetch the Doctor with the ID ${args.where.id} due to ${error}`,
      );
    }
  }

  async findMany(
    sort: { field: string; order: 'asc' | 'desc' },
    range: { skip: number; take: number },
    filter: Prisma.DoctorWhereInput,
  ): Promise<{ doctors: Doctor[]; count: number }> {
    try {
      // const { field, order } = sort;
      const field = sort.field;
      const value = sort.order.toLowerCase() as 'asc' | 'desc';
      const [doctors, count] = await Promise.all([
        this.prisma.doctor.findMany({
          orderBy: { [field]: value },
          skip: range.skip,
          take: range.take - range.skip + 1,
          where: filter,
        }),
        this.prisma.doctor.count(),
      ]);

      return { doctors, count };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `List doctors failed due to ${error}`,
      );
    }
  }

  async deleteOne(args: Prisma.DoctorDeleteArgs): Promise<{ id: string }> {
    try {
      await this.prisma.doctor.delete({ where: args.where });
      return { id: args.where.id };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `The deletion of the Doctor with the ID ${args.where.id} has failed due to: ${error}`,
      );
    }
  }
}

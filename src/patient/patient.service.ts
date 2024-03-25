import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Patient, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class PatientService {
  private readonly logger = new Logger(PatientService.name);
  constructor(private prisma: PrismaService) {}
  async createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
    try {
      const patient = await this.prisma.patient.create({ data });
      return patient;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to create the Patient because of: ${error}`,
      );
    }
  }
  async updateOne(args: Prisma.PatientUpdateArgs): Promise<Patient> {
    try {
      const updatedPatient = await this.prisma.patient.update({
        where: args.where,
        data: args.data,
      });
      return updatedPatient;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to update the Patient with the ID ${args.where.id} due to: ${error}`,
      );
    }
  }
  async deleteOne(args: Prisma.PatientDeleteArgs): Promise<{ id: string }> {
    try {
      await this.prisma.patient.delete({ where: args.where });
      return { id: args.where.id };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `The deletion of the Patient with the ID ${args.where.id} has failed due to: ${error}`,
      );
    }
  }

  async findOne(args: Prisma.PatientFindUniqueArgs): Promise<Patient | null> {
    try {
      const { id } = args.where;
      const patient = await this.prisma.patient.findUnique({
        where: { id },
      });
      if (!patient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
      return patient;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to fetch the Patient with the ID ${args.where.id}`,
      );
    }
  }

  async findMany(
    sort: { field: string; order: 'asc' | 'desc' },
    range: { skip: number; take: number },
    filter: any,
  ): Promise<{ patients: Patient[]; count: number }> {
    try {
      const field = sort.field;
      const value = sort.order.toLowerCase() as 'asc' | 'desc';
      const [patients, count] = await Promise.all([
        this.prisma.patient.findMany({
          orderBy: { [field]: value },
          skip: range.skip,
          take: range.take,
          where: filter,
        }),
        this.prisma.patient.count(),
      ]);
      return { patients, count };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to list all patients due to ${error}`,
      );
    }
  }
}

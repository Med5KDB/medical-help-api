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
    orderBy: Prisma.PatientOrderByWithRelationInput,
    range: { skip?: number; take?: number },
  ): Promise<Patient[]> {
    try {
      const patients = await this.prisma.patient.findMany({
        orderBy: orderBy,
        skip: range.skip,
        take: range.take,
      });
      return patients;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to list all patients due to ${error}`,
      );
    }
  }
}

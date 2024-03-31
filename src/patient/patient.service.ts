import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Patient, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { omit } from 'lodash';
import { ListArgs } from 'src/lib/listArg';

@Injectable()
export class PatientService {
  private readonly logger = new Logger(PatientService.name);
  constructor(private prisma: PrismaService) {}
  async createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
    try {
      const patient = await this.prisma.patient.create({
        data: { ...data, birthDate: new Date(data.birthDate).toISOString() },
      });
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
        data: omit(args.data, 'id', 'patientId'),
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
    filter: Prisma.PatientWhereInput,
    listArg?: ListArgs,
  ): Promise<{ patients: Patient[]; count: number }> {
    try {
      let allArgs: Prisma.PatientFindManyArgs = {};

      if (listArg.order) {
        const { field, order, skip, take } = listArg;
        const orderBy = { [field]: order.toLowerCase() as 'asc' | 'desc' };

        let where: Prisma.PatientWhereInput = {};
        const filterContent = filter
          ? filter[Object.keys(filter)[0]]
          : undefined;
        where = filterContent
          ? {
              OR: [
                { lastname: { contains: filterContent } },
                { firstname: { contains: filterContent } },
                { phoneNumber: { contains: filterContent } },
              ],
            }
          : {};
        allArgs = {
          ...allArgs,
          orderBy,
          skip,
          take: take - skip + 1,
          where,
        };
      } else {
        const filterName = Object.keys(filter)[0];
        const filterContent = filter[filterName];
        const filterArray = Array.isArray(filterContent)
          ? { [filterName]: { in: filterContent } }
          : { [filterName]: filterContent };

        allArgs = {
          ...allArgs,
          where: filterArray,
        };
      }
      const [patients, count] = await Promise.all([
        this.prisma.patient.findMany(allArgs),
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

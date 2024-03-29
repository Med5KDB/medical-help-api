import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma.service';
import { MedicalAssistant, Prisma } from '@prisma/client';
import { omit } from 'lodash';

@Injectable()
export class MedicalAssistantService {
  private readonly logger = new Logger(MedicalAssistantService.name);
  constructor(private prisma: PrismaService) { }
  async findMany(
    sort: { field: string; order: 'asc' | 'desc' },
    range: { skip: number; take: number },
    filter: Prisma.MedicalAssistantWhereInput,
  ): Promise<{ medicalAssistants: MedicalAssistant[]; count: number }> {
    try {
      const field = sort.field;
      const value = sort.order.toLowerCase() as 'asc' | 'desc';
      const [medicalAssistants, count] = await Promise.all([
        this.prisma.medicalAssistant.findMany({
          orderBy: { [field]: value },
          skip: range.skip,
          take: range.take - range.skip + 1,
          where: filter,
        }),
        this.prisma.medicalAssistant.count(),
      ]);
      return { medicalAssistants, count };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `List doctors failed due to ${error}`,
      );
    }
  }
  async findOne(
    args: Prisma.DoctorFindUniqueArgs,
  ): Promise<MedicalAssistant | null> {
    try {
      const { id } = args.where;
      const medicalAssistant = await this.prisma.medicalAssistant.findUnique({
        where: { id },
      });
      if (!medicalAssistant) {
        throw new NotFoundException(
          `Medical Assistant with ID ${id} not found`,
        );
      }
      return medicalAssistant;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException(
        `Failed to fetch the medical assistant with the ID ${args.where.id} due to ${err}`,
      );
    }
  }

  async createMedicalAssistant(
    data: Prisma.MedicalAssistantCreateInput,
  ): Promise<MedicalAssistant> {
    try {
      const medicalAssistant = await this.prisma.medicalAssistant.create({
        data,
      });
      return medicalAssistant;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to create the medical assistant due to: ${error}`,
      );
    }
  }
  async updateOne(
    args: Prisma.MedicalAssistantUpdateArgs,
  ): Promise<MedicalAssistant> {
    try {
      const updatedMedicalAssistant = await this.prisma.medicalAssistant.update(
        {
          where: args.where,
          data: omit(args.data, 'id'),
        },
      );
      return updatedMedicalAssistant;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to update medical assistant with the ID ${args.where.id} due to: ${error}`,
      );
    }
  }
  async deleteOne(
    args: Prisma.MedicalAssistantDeleteArgs,
  ): Promise<{ id: string }> {
    try {
      await this.prisma.medicalAssistant.delete({ where: args.where });
      return { id: args.where.id };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `The deletion of the medical assistant with the ID ${args.where.id} has failed due to: ${error}`,
      );
    }
  }
}

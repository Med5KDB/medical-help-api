import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../lib/prisma.service';
import { MedicalAssistant, Prisma } from '@prisma/client';
import { omit } from 'lodash';
import { ListArgs } from 'src/lib/listArg';

@Injectable()
export class MedicalAssistantService {
  private readonly logger = new Logger(MedicalAssistantService.name);
  constructor(private prisma: PrismaService) {}
  async findMany(
    filter: Prisma.MedicalAssistantWhereInput,
    listArg?: ListArgs,
  ): Promise<{ medicalAssistants: MedicalAssistant[]; count: number }> {
    try {
      let allArgs: Prisma.MedicalAssistantFindManyArgs = {};

      if (listArg.order) {
        const { field, order, skip, take } = listArg;
        const orderBy = { [field]: order.toLowerCase() as 'asc' | 'desc' };

        let where: Prisma.MedicalAssistantWhereInput = {};
        const filterContent = filter
          ? filter[Object.keys(filter)[0]]
          : undefined;
        where = filterContent
          ? {
              OR: [
                { username: { contains: filterContent } },
                { lastname: { contains: filterContent } },
                { firstname: { contains: filterContent } },
                { phoneNumber: { contains: filterContent } },
                { email: { contains: filterContent } },
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
      const [medicalAssistants, count] = await Promise.all([
        this.prisma.medicalAssistant.findMany(allArgs),
        this.prisma.medicalAssistant.count(),
      ]);
      return { medicalAssistants, count };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `List MedicalAssistants failed due to ${error}`,
      );
    }
  }
  async findOne(
    args: Prisma.MedicalAssistantFindUniqueArgs,
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

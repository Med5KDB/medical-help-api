import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Hospital, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { omit } from 'lodash';
import { ListArgs } from 'src/lib/listArg';

@Injectable()
export class HospitalService {
  private readonly logger = new Logger(HospitalService.name);
  constructor(private prisma: PrismaService) {}
  async createHospital(data: Prisma.HospitalCreateInput): Promise<Hospital> {
    try {
      const hospital = await this.prisma.hospital.create({ data });
      return hospital;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to create the hospital because of: ${error}`,
      );
    }
  }

  async updateOne(args: Prisma.HospitalUpdateArgs): Promise<Hospital> {
    try {

      const updatedHospital = await this.prisma.hospital.update({
        where: args.where,
        data: omit(args.data, 'id'),
      });
      return updatedHospital;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to update the Hospital with the ID ${args.where.id} due to: ${error}`,
      );
    }
  }
  async findOne(args: Prisma.HospitalFindUniqueArgs): Promise<Hospital | null> {
    try {
      const { id } = args.where;
      const Hospital = await this.prisma.hospital.findUnique({
        where: { id },
      });
      if (!Hospital) {
        throw new NotFoundException(`Hospital with ID ${id} not found`);
      }
      return Hospital;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to fetch the Hospital with the ID ${args.where.id} due to ${error}`,
      );
    }
  }

  async findMany(
    filter: Prisma.HospitalWhereInput,
    listArg?: ListArgs,
  ): Promise<{ hospitals: Hospital[]; count: number }> {
    try {
      let allArgs: Prisma.HospitalFindManyArgs = {};

      if (listArg.order) {
        const { field, order, skip, take } = listArg;
        const orderBy = { [field]: order.toLowerCase() as 'asc' | 'desc' };
        allArgs = {
          ...allArgs,
          orderBy,
          skip,
          take: take - skip + 1,
          where: filter,
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
      const [hospitals, count] = await Promise.all([
        this.prisma.hospital.findMany(allArgs),
        this.prisma.hospital.count(),
      ]);


      return { hospitals, count };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `List hospitals failed due to ${error}`,
      );
    }
  }

  async deleteOne(args: Prisma.HospitalDeleteArgs): Promise<{ id: string }> {
    try {
      await this.prisma.hospital.delete({ where: args.where });
      return { id: args.where.id };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `The deletion of the Hospital with the ID ${args.where.id} has failed due to: ${error}`,
      );
    }
  }
}

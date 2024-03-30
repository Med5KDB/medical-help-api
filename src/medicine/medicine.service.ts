import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Medicine, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { omit } from 'lodash';
import { ListArgs } from 'src/lib/listArg';


@Injectable()
export class MedicineService {
  private readonly logger = new Logger(MedicineService.name);
  constructor(private prisma: PrismaService) {}
  async createMedicine(data: Prisma.MedicineCreateInput): Promise<Medicine> {
    try {
      const Medicine = await this.prisma.medicine.create({ data });
      return Medicine;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to create the medicine because of: ${error}`,
      );
    }
  }
  async updateOne(args: Prisma.MedicineUpdateArgs): Promise<Medicine> {
    try {
      const updatedMedicine = await this.prisma.medicine.update({
        where: args.where,
        data: omit(args.data, 'id'),
      });
      return updatedMedicine;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to update the medicine with the ID ${args.where.id} due to: ${error}`,
      );
    }
  }
  async findOne(args: Prisma.MedicineFindUniqueArgs): Promise<Medicine | null> {
    try {
      const { id } = args.where;
      const Medicine = await this.prisma.medicine.findUnique({
        where: { id },
      });
      if (!Medicine) {
        throw new NotFoundException(`Medicine with ID ${id} not found`);
      }
      return Medicine;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to fetch the medicine with the ID ${args.where.id} due to ${error}`,
      );
    }
  }

  async findMany(
    filter: Prisma.MedicineWhereInput,
    listArg?: ListArgs,
  ): Promise<{ medicines: Medicine[]; count: number }> {
    try {
      let allArgs: Prisma.MedicineFindManyArgs = {};

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
      const [medicines, count] = await Promise.all([
        this.prisma.medicine.findMany(allArgs),
        this.prisma.medicine.count(),
      ]);

      return { medicines, count };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `List medicines failed due to ${error}`,
      );
    }
  }

  async deleteOne(args: Prisma.MedicineDeleteArgs): Promise<{ id: string }> {
    try {
      await this.prisma.medicine.delete({ where: args.where });
      return { id: args.where.id };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `The deletion of the medicine with the ID ${args.where.id} has failed due to: ${error}`,
      );
    }
  }
}

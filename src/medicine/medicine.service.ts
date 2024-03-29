import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Medicine, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

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
        data: args.data,
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
    sort: { field: string; order: 'asc' | 'desc' },
    range: { skip: number; take: number },
    filter: Prisma.MedicineWhereInput,
  ): Promise<{ medicines: Medicine[]; count: number }> {
    try {
      // const { field, order } = sort;
      const field = sort.field;
      const value = sort.order.toLowerCase() as 'asc' | 'desc';
      const [medicines, count] = await Promise.all([
        this.prisma.medicine.findMany({
          orderBy: { [field]: value },
          skip: range.skip,
          take: range.take - range.skip + 1,
          where: filter,
        }),
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

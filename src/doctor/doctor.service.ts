import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Doctor, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { omit } from 'lodash';
import { ListArgs } from 'src/lib/listArg';


@Injectable()
export class DoctorService {
  private readonly logger = new Logger(DoctorService.name);
  constructor(private prisma: PrismaService) { }
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
        data: omit(args.data, 'id'),
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
    filter: Prisma.DoctorWhereInput,
    listArg?: ListArgs,
  ): Promise<{ doctors: Doctor[]; count: number }> {
    try {
      let allArgs: Prisma.DoctorFindManyArgs = {};


      if (listArg.order) {
        const { field, order, skip, take } = listArg;
        let where: Prisma.DoctorWhereInput = {};
        const filterContent = filter ? filter[Object.keys(filter)[0]] : undefined;
        where = filterContent ? {
          OR: [
            { username: { contains: filterContent } },
            { lastname: { contains: filterContent } },
            { firstname: { contains: filterContent } },
            { phoneNumber: { contains: filterContent } },
            { email: { contains: filterContent } }
          ]
        } : {};


        const orderBy = { [field]: order.toLowerCase() as 'asc' | 'desc' };
        allArgs = {
          ...allArgs,
          orderBy,
          skip,
          take: take - skip + 1,
          where
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
      const [doctors, count] = await Promise.all([
        this.prisma.doctor.findMany(allArgs),
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

import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Appointment, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class AppointmentService {
  private readonly logger = new Logger(AppointmentService.name);

  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.AppointmentCreateInput): Promise<Appointment> {
    try {
      const appointment = await this.prisma.appointment.create({ data });
      return appointment;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException(
        `Failed to create the appointment due to : ${err}`,
      );
    }
  }

  async updateOne(args: Prisma.AppointmentUpdateArgs): Promise<Appointment> {
    try {
      const updatedAppointment = await this.prisma.appointment.update({
        where: args.where,
        data: args.data,
      });
      return updatedAppointment;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Failed to update the appointment with the ID ${args.where.id} due to: ${error}`,
      );
    }
  }

  async findMany(
    sort: { field: string; order: 'asc' | 'desc' },
    range: { skip: number; take: number },
    filter: Prisma.AppointmentWhereInput,
  ): Promise<{ appointments: Appointment[]; count: number }> {
    try {
      const field = sort.field;
      const value = sort.order.toLowerCase() as 'asc' | 'desc';
      const [appointments, count] = await Promise.all([
        this.prisma.appointment.findMany({
          orderBy: { [field]: value },
          skip: range.skip,
          take: range.take - range.skip + 1,
          where: filter,
        }),
        this.prisma.appointment.count(),
      ]);
      return { appointments, count };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `All appointment return failed due to ${error}`,
      );
    }
  }

  async findOne(
    args: Prisma.AppointmentFindUniqueArgs,
  ): Promise<Appointment | null> {
    try {
      const { id } = args.where;
      const appointment = await this.prisma.appointment.findUnique({
        where: { id },
      });

      return appointment;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException(
        `Failed to fetch the appointment with the ID ${args.where.id} due to ${err}`,
      );
    }
  }

  async deleteOne(args: Prisma.AppointmentDeleteArgs): Promise<{ id: string }> {
    try {
      await this.prisma.appointment.delete({ where: args.where });
      return { id: args.where.id };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        `Deleting appointment with the ID ${args.where.id} failed due to: ${error}`,
      );
    }
  }
}

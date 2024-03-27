import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  InternalServerErrorException,
  Res,
  Put,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Response } from 'express';
import { Appointment, Prisma } from '@prisma/client';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async createAppointment(
    @Body() data: Prisma.AppointmentCreateInput,
  ): Promise<Appointment> {
    return await this.appointmentService.create(data);
  }

  @Get()
  async appointments(
    @Query('sort') sort: string,
    @Query('range') range: string,
    @Query('filter') filter: string,
    @Res() response: Response,
  ) {
    try {
      const parsedSort = JSON.parse(sort);
      const parsedRange = JSON.parse(range);
      const parsedFilter = JSON.parse(filter);

      const sortArray = Array.isArray(parsedSort) ? parsedSort : [parsedSort];

      const field = sortArray[0];
      const order = sortArray[1];

      const skip = parsedRange[0];
      const take = parsedRange[1];

      const { appointments, count } = await this.appointmentService.findMany(
        { field, order },
        { skip, take },
        parsedFilter,
      );
      const length = appointments.length;
      response.set(
        'Content-Range',
        `doctors ${skip}-${skip + length}/${count}`,
      );
      response.json(appointments);
    } catch (err) {
      throw new InternalServerErrorException(
        `List appointements failed due to ${err}`,
      );
    }
  }

  @Get(':id')
  async appointment(@Param('id') id: string): Promise<Appointment | null> {
    const args: Prisma.AppointmentFindUniqueArgs = { where: { id } };
    return await this.appointmentService.findOne(args);
  }

  @Put(':id')
  async updateAppointment(
    @Param('id') id: string,
    @Body() data: Prisma.AppointmentUpdateArgs['data'],
  ): Promise<Appointment> {
    const args: Prisma.AppointmentUpdateArgs = { where: { id }, data };
    return await this.appointmentService.updateOne(args);
  }
  @Delete(':id')
  async deleteAppointment(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.AppointmentDeleteArgs = { where: { id } };
    return await this.appointmentService.deleteOne(args);
  }
}

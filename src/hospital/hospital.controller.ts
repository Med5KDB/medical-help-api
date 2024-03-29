import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  Res,
  InternalServerErrorException,
} from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { Hospital, Prisma } from '@prisma/client';
import { Response } from 'express';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Post()
  async addHospital(
    @Body() data: Prisma.HospitalCreateInput,
  ): Promise<Hospital> {
    return await this.hospitalService.createHospital(data);
  }

  @Get(':id')
  async Hospital(@Param('id') id: string): Promise<Hospital | null> {
    const args: Prisma.HospitalFindUniqueArgs = { where: { id } };
    return await this.hospitalService.findOne(args);
  }

  @Get()
  async Hospitals(
    @Query('sort') sort: string,
    @Query('range') range: string,
    @Query('filter') filter: string,
    @Res() response: Response,
  ) {
    try {
      const parsedSort = JSON.parse(sort);
      const parsedRange = JSON.parse(range);
      const parsedFilter = JSON.parse(filter);

      // Ensure that sort is an array
      const sortArray = Array.isArray(parsedSort) ? parsedSort : [parsedSort];

      const field = sortArray[0];
      const order = sortArray[1];

      const skip = parsedRange[0];
      const take = parsedRange[1];

      const { hospitals, count } = await this.hospitalService.findMany(
        { field, order },
        { skip, take },
        parsedFilter,
      );
      const length = hospitals.length;
      response.set(
        'Content-Range',
        `hospitals ${skip}-${skip + length}/${count}`,
      );

      response.json(hospitals);
    } catch (error) {
      throw new InternalServerErrorException(
        `List hospitals failed due to ${error}`,
      );
    }
  }

  @Put(':id')
  async updateHospital(
    @Param('id') id: string,
    @Body() data: Prisma.HospitalUpdateArgs['data'],
  ): Promise<Hospital> {
    const args: Prisma.HospitalUpdateArgs = { where: { id }, data };
    return await this.hospitalService.updateOne(args);
  }
  @Delete(':id')
  async deleteHospital(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.HospitalDeleteArgs = { where: { id } };
    const deletedHospital = await this.hospitalService.deleteOne(args);
    return deletedHospital;
  }
}

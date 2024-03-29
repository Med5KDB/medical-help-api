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
import { ListArgs } from 'src/lib/listArg';

@Controller('Hospital')
export class HospitalController {
  constructor(private readonly HospitalService: HospitalService) { }

  @Post()
  async addHospital(@Body() data: Prisma.HospitalCreateInput): Promise<Hospital> {
    return await this.HospitalService.createHospital(data);
  }

  @Get(':id')
  async Hospital(@Param('id') id: string): Promise<Hospital | null> {
    const args: Prisma.HospitalFindUniqueArgs = { where: { id } };
    return await this.HospitalService.findOne(args);
  }

  @Get()
  async Hospitals(
    @Res() response: Response,
    @Query('sort') sort?: string,
    @Query('range') range?: string,
    @Query('filter') filter?: string,
  ) {
    try {
      const args: ListArgs = {
        field: sort ? JSON.parse(sort)[0] : undefined,
        order: sort ? JSON.parse(sort)[1] : undefined,
        skip: range ? JSON.parse(range)[0] : undefined,
        take: range ? JSON.parse(range)[1] : undefined,
      };
      const parsedFilter = filter ? JSON.parse(filter) : undefined;

      const { hospitals, count } = await this.HospitalService.findMany(
        parsedFilter, args
      );
      if (args.order) {
        const length = hospitals.length;
        response.set(
          'Content-Range',
          `hospitals ${args.skip}-${args.skip + length}/${count}`,
        );
      }

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
    return await this.HospitalService.updateOne(args);
  }
  @Delete(':id')
  async deleteHospital(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.HospitalDeleteArgs = { where: { id } };
    const deletedHospital = await this.HospitalService.deleteOne(args);
    return deletedHospital;
  }
}

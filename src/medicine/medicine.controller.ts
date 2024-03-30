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
import { MedicineService } from './medicine.service';

import { Medicine, Prisma } from '@prisma/client';
import { Response } from 'express';
import { ListArgs } from 'src/lib/listArg';

@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) { }

  @Post()
  async addMedicine(
    @Body() data: Prisma.MedicineCreateInput,
  ): Promise<Medicine> {
    return await this.medicineService.createMedicine(data);
  }

  @Get(':id')
  async Medicine(@Param('id') id: string): Promise<Medicine | null> {
    const args: Prisma.MedicineFindUniqueArgs = { where: { id } };
    return await this.medicineService.findOne(args);
  }

  @Get()
  async Medicines(
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


      const { medicines, count } = await this.medicineService.findMany(
        parsedFilter, args

      );
      if (args.order) {
        const length = medicines.length;
        response.set(
          'Content-Range',
          `medicines ${args.skip}-${args.skip + length}/${count}`,
        );
      }

      response.json(medicines);
    } catch (error) {
      throw new InternalServerErrorException(
        `List medicines failed due to ${error}`,
      );
    }
  }

  @Put(':id')
  async updateMedicine(
    @Param('id') id: string,
    @Body() data: Prisma.MedicineUpdateArgs['data'],
  ): Promise<Medicine> {
    const args: Prisma.MedicineUpdateArgs = { where: { id }, data };
    return await this.medicineService.updateOne(args);
  }
  @Delete(':id')
  async deleteMedicine(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.MedicineDeleteArgs = { where: { id } };
    const deletedMedicine = await this.medicineService.deleteOne(args);
    return deletedMedicine;
  }
}

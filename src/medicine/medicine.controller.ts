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

@Controller('medicine')
export class MedicineController {
  constructor(private readonly MedicineService: MedicineService) { }

  @Post()
  async addMedicine(@Body() data: Prisma.MedicineCreateInput): Promise<Medicine> {
    return await this.MedicineService.createMedicine(data);
  }

  @Get(':id')
  async Medicine(@Param('id') id: string): Promise<Medicine | null> {
    const args: Prisma.MedicineFindUniqueArgs = { where: { id } };
    return await this.MedicineService.findOne(args);
  }

  @Get()
  async Medicines(
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

      const { medicines, count } = await this.MedicineService.findMany(
        { field, order },
        { skip, take },
        parsedFilter,
      );
      const length = medicines.length;
      response.set(
        'Content-Range',
        `Medicines ${skip}-${skip + length}/${count}`,
      );

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
    return await this.MedicineService.updateOne(args);
  }
  @Delete(':id')
  async deleteMedicine(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.MedicineDeleteArgs = { where: { id } };
    const deletedMedicine = await this.MedicineService.deleteOne(args);
    return deletedMedicine;
  }
}

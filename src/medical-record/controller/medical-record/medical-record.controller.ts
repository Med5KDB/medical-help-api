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
import { MedicalRecord, Prisma } from '@prisma/client';
import { Response } from 'express';
import { MedicalRecordService } from 'src/medical-record/services/medical-record.service';

@Controller('medicalRecord')
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post()
  async addMedicalRecord(
    @Body() data: Prisma.MedicalRecordCreateInput,
  ): Promise<MedicalRecord> {
    return await this.medicalRecordService.createMedicalRecord(data);
  }

  @Get(':id')
  async MedicalRecord(@Param('id') id: string): Promise<MedicalRecord | null> {
    const args: Prisma.MedicalRecordFindUniqueArgs = { where: { id } };
    return await this.medicalRecordService.findOne(args);
  }

  @Get()
  async MedicalRecords(
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

      const { medicalRecords, count } =
        await this.medicalRecordService.findMany(
          { field, order },
          { skip, take },
          parsedFilter,
        );
      const length = medicalRecords.length;
      response.set(
        'Content-Range',
        `MedicalRecords ${skip}-${skip + length}/${count}`,
      );

      response.json(medicalRecords);
    } catch (error) {
      throw new InternalServerErrorException(
        `List medicalRecords failed due to ${error}`,
      );
    }
  }

  @Put(':id')
  async updateMedicalRecord(
    @Param('id') id: string,
    @Body() data: Prisma.MedicalRecordUpdateArgs['data'],
  ): Promise<MedicalRecord> {
    const args: Prisma.MedicalRecordUpdateArgs = { where: { id }, data };
    return await this.medicalRecordService.updateOne(args);
  }
  @Delete(':id')
  async deleteMedicalRecord(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.MedicalRecordDeleteArgs = { where: { id } };
    const deletedMedicalRecord = await this.medicalRecordService.deleteOne(
      args,
    );
    return deletedMedicalRecord;
  }
}

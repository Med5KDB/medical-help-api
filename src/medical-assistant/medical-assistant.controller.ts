import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Res,
  InternalServerErrorException,
  Put,
} from '@nestjs/common';
import { MedicalAssistantService } from './medical-assistant.service';
import { Response } from 'express';
import { MedicalAssistant, Prisma } from '@prisma/client';

@Controller('medical-assistant')
export class MedicalAssistantController {
  constructor(
    private readonly medicalAssistantService: MedicalAssistantService,
  ) {}

  @Post()
  addMedicalAssistant(
    @Body() data: Prisma.MedicalAssistantCreateInput,
  ): Promise<MedicalAssistant> {
    return this.medicalAssistantService.createMedicalAssistant(data);
  }

  @Get()
  async medicalAssistants(
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

      const { medicalAssistants, count } =
        await this.medicalAssistantService.findMany(
          { field, order },
          { skip, take },
          parsedFilter,
        );
      const length = medicalAssistants.length;
      response.set(
        'Content-Range',
        `doctors ${skip}-${skip + length}/${count}`,
      );
      response.json(medicalAssistants);
    } catch (err) {
      throw new InternalServerErrorException(
        `List medical assistants failed due to ${err}`,
      );
    }
  }

  @Get(':id')
  async medicalAssistant(
    @Param('id') id: string,
  ): Promise<MedicalAssistant | null> {
    const args: Prisma.DoctorFindUniqueArgs = { where: { id } };
    return await this.medicalAssistantService.findOne(args);
  }

  @Put(':id')
  async updateMedicalAssistant(
    @Param('id') id: string,
    @Body() data: Prisma.MedicalAssistantUpdateArgs['data'],
  ) {
    const args: Prisma.MedicalAssistantUpdateArgs = { where: { id }, data };
    return await this.medicalAssistantService.updateOne(args);
  }

  @Delete(':id')
  async deleteDoctor(@Param('id') id: string): Promise<{ id: string }> {
    const args: Prisma.MedicalAssistantDeleteArgs = { where: { id } };
    const deletedDoctor = await this.medicalAssistantService.deleteOne(args);
    return deletedDoctor;
  }
}

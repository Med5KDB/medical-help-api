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
import { ListArgs } from 'src/lib/listArg';

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

      const { medicalAssistants, count } =
        await this.medicalAssistantService.findMany(parsedFilter, args);
      if (args.order) {
        const length = medicalAssistants.length;
        response.set(
          'Content-Range',
          `medicalAssistants ${args.skip}-${args.skip + length}/${count}`,
        );
      }
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
    const args: Prisma.MedicalAssistantFindUniqueArgs = { where: { id } };
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

import {
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { MedicalRecord, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { omit } from 'lodash';

@Injectable()
export class MedicalRecordService {
    private readonly logger = new Logger(MedicalRecordService.name);
    constructor(private prisma: PrismaService) { }
    async createMedicalRecord(
        data: Prisma.MedicalRecordCreateInput,
    ): Promise<MedicalRecord> {
        try {
            const medicalRecord = await this.prisma.medicalRecord.create({ data });
            return medicalRecord;
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException(
                `Failed to create the medicalRecord because of: ${error}`,
            );
        }
    }

    async updateOne(
        args: Prisma.MedicalRecordUpdateArgs,
    ): Promise<MedicalRecord> {
        try {
            const updatedMedicalRecord = await this.prisma.medicalRecord.update({
                where: args.where,
                data: {
                    ...omit(args.data, 'id', 'patientId'),
                    updatedAt: new Date(),
                },
            });
            return updatedMedicalRecord;
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException(
                `Failed to update the medicalRecord with the ID ${args.where.id} due to: ${error}`,
            );
        }
    }
    async findOne(
        args: Prisma.MedicalRecordFindUniqueArgs,
    ): Promise<MedicalRecord | null> {
        try {
            const { id } = args.where;
            const medicalRecord = await this.prisma.medicalRecord.findUnique({
                where: { id },
            });
            if (!medicalRecord) {
                throw new NotFoundException(`medicalRecord with ID ${id} not found`);
            }
            return medicalRecord;
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException(
                `Failed to fetch the medicalRecord with the ID ${args.where.id} due to ${error}`,
            );
        }
    }

    async findMany(
        sort: { field: string; order: 'asc' | 'desc' },
        range: { skip: number; take: number },
        filter: Prisma.MedicalRecordWhereInput,
    ): Promise<{ medicalRecords: MedicalRecord[]; count: number }> {
        try {
            // const { field, order } = sort;
            const field = sort.field;
            const value = sort.order.toLowerCase() as 'asc' | 'desc';
            const [medicalRecords, count] = await Promise.all([
                this.prisma.medicalRecord.findMany({
                    orderBy: { [field]: value },
                    skip: range.skip,
                    take: range.take - range.skip + 1,
                    where: filter,
                }),
                this.prisma.medicalRecord.count(),
            ]);

            return { medicalRecords, count };
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException(
                `List medicalRecords failed due to ${error}`,
            );
        }
    }

    async deleteOne(
        args: Prisma.MedicalRecordDeleteArgs,
    ): Promise<{ id: string }> {
        try {
            await this.prisma.medicalRecord.delete({ where: args.where });
            return { id: args.where.id };
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException(
                `The deletion of the MedicalRecord with the ID ${args.where.id} has failed due to: ${error}`,
            );
        }
    }
}

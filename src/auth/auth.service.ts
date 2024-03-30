import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Admin, Doctor, MedicalAssistant } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }


    async signIn(username: string, password: string): Promise<{ access_token: string }> {
        const doctor = await this.prisma.doctor.findUnique({ where: { username } });

        if (doctor) {
            if (doctor.password !== password) {
                throw new UnauthorizedException();

            }
            const payload = { sub: doctor.id, username: doctor.username };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }

        const medicalAssistant = await this.prisma.medicalAssistant.findFirst({ where: { username } });

        if (medicalAssistant) {
            if (medicalAssistant.password !== password) {
                throw new UnauthorizedException();

            }
            const payload = { sub: medicalAssistant.id, username: medicalAssistant.username };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }

        const admin = await this.prisma.admin.findFirst({ where: { username } });

        if (admin) {
            if (admin.password !== password) {
                throw new UnauthorizedException();

            }
            const payload = { sub: admin.id, username: admin.username };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }

        return null;

    }
}

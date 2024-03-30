import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    Res,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { Public } from './constants';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: Record<string, any>, @Res() res: Response) {
        const token = await this.authService.signIn(signInDto.username, signInDto.password);
        // console.log(token)
        if (token) {
            return res.status(HttpStatus.CREATED).json({ token });
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Username or password is incorrect' })
        }

    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}

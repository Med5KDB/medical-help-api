import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    preflightContinue: false,
    allowedHeaders: [
      'Content-type',
      'Authorization',
      'Access-Control-Request-Headers',
      'range',
    ],
    exposedHeaders: ['Content-Range'],
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();

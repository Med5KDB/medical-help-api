import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
// import { Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    preflightContinue: false,
    allowedHeaders: ['Content-type', 'Access-Control-Request-Headers', 'range'],
    exposedHeaders: ['Content-Range'],
  };
  app.enableCors(corsOptions);
  // app.use((req, res: Response, next) => {
  //   res.setHeader(
  //     'Access-Control-Expose-Headers',
  //     'Content-Range, X-Total-Count, range',
  //   );
  //   next();
  // });
  await app.listen(3000);
}
bootstrap();

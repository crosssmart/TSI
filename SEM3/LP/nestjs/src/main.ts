import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Validadores globais
  //utilizamos no formato decorator @IsNumber(), @IsNotEmpty()...
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // permite apenas campos que estão no DTO
      forbidNonWhitelisted: true, //lançar erro qnd receber campos que não estão no DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //validadores globais
  //utilizamos no formato decorator @IsNumber(), @IsNotEmpty()...
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //permite apenas campos que estão no DTO
      forbidNonWhitelisted: true, //lançar erro qnd receber campos q não estão no DTO
    }),
  );

  //SWAGGER
  const config = new DocumentBuilder()
    .setTitle('API de Músicas e Usuários')
    .setDescription('Documentação da API REST')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  //disponível no http://localhost:3000/api-docs

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();

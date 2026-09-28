import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoModule } from './produto/produto.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config.js';

@Module({
  imports: [
    ProdutoModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.URL_BD,
      autoLoadEntities: true,
      synchronize: true, //somente em modo DEV
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

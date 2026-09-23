import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoModule } from './produto/produto.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProdutoModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://RogerioFilho:vmpb2016@cluster0.tur3mnb.mongodb.net/?appName=Cluster0',
      autoLoadEntities: true,
      synchronize: true, //somente em modo DEV
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

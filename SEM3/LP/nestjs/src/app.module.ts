import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoModule } from './produto/produto.module.js';

@Module({
  imports: [ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

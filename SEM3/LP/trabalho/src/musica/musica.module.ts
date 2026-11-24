import { Module } from '@nestjs/common';
import { MusicaService } from './musica.service.js';
import { MusicaController } from './musica.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musica } from './entities/musica.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Musica])],
  controllers: [MusicaController],
  providers: [MusicaService],
})
export class MusicaModule {}

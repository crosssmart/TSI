import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Musica } from './entities/musica.entity.js';
import { CreateMusicaDto } from './dto/create-musica.dto.js';
import { UpdateMusicaDto } from './dto/update-musica.dto.js';

@Injectable()
export class MusicaService {
  constructor(
    @InjectRepository(Musica)
    private readonly musicaRepository: Repository<Musica>,
  ) {}

  async create(createMusicaDto: CreateMusicaDto): Promise<Musica> {
    const musica = this.musicaRepository.create(createMusicaDto);
    return await this.musicaRepository.save(musica);
  }

  async findAll(): Promise<Musica[]> {
    return await this.musicaRepository.find();
  }

  async findOne(id: string): Promise<Musica> {
    const musica = await this.musicaRepository.findOneBy({
      _id: new ObjectId(id),
    } as any);
    if (!musica) {
      throw new NotFoundException(`Música com id ${id} não encontrada`);
    }
    return musica;
  }

  async update(id: string, updateMusicaDto: UpdateMusicaDto): Promise<Musica> {
    const musica = await this.findOne(id); // valida existência (404)
    Object.assign(musica, updateMusicaDto);
    return await this.musicaRepository.save(musica);
  }

  async remove(id: string): Promise<{ message: string }> {
    const musica = await this.findOne(id); // valida existência (404)
    await this.musicaRepository.remove(musica);
    return {
      message: 'Música deletada com sucesso!',
    };
  }
}

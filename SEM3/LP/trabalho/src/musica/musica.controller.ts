import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';

import { MusicaService } from './musica.service.js';
import { CreateMusicaDto } from './dto/create-musica.dto.js';
import { UpdateMusicaDto } from './dto/update-musica.dto.js';

@ApiTags('Músicas')
@ApiBearerAuth()
@Controller('musicas')
export class MusicaController {
  constructor(private readonly musicaService: MusicaService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar uma nova música' })
  @ApiResponse({ status: 201, description: 'Música cadastrada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createMusicaDto: CreateMusicaDto) {
    return this.musicaService.create(createMusicaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as músicas' })
  @ApiResponse({ status: 200, description: 'Lista de músicas retornada.' })
  findAll() {
    return this.musicaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar música por ID' })
  @ApiParam({ name: 'id', description: 'ID da música' })
  @ApiResponse({ status: 200, description: 'Música encontrada.' })
  @ApiResponse({ status: 404, description: 'Música não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.musicaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados de uma música' })
  @ApiParam({ name: 'id', description: 'ID da música' })
  @ApiResponse({ status: 200, description: 'Música atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Música não encontrada.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  update(@Param('id') id: string, @Body() updateMusicaDto: UpdateMusicaDto) {
    return this.musicaService.update(id, updateMusicaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma música' })
  @ApiParam({ name: 'id', description: 'ID da música' })
  @ApiResponse({ status: 200, description: 'Música excluída com sucesso.' })
  @ApiResponse({ status: 404, description: 'Música não encontrada.' })
  async remove(@Param('id') id: string) {
    return await this.musicaService.remove(id);
  }
}

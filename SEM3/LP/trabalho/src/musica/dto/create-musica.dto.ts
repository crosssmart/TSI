import { IsString, IsNotEmpty, IsOptional, IsInt, Min } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMusicaDto {
  @ApiProperty({
    description: 'Título da música',
    example: 'Bohemian Rhapsody',
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description: 'Nome do artista ou banda',
    example: 'Queen',
  })
  @IsString()
  @IsNotEmpty()
  artista: string;

  @ApiPropertyOptional({
    description: 'Nome do álbum',
    example: 'A Night at the Opera',
  })
  @IsString()
  @IsOptional()
  album?: string;

  @ApiPropertyOptional({
    description: 'Duração da música em segundos',
    example: 355,
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  duracaoSegundos?: number;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicaDto } from './create-musica.dto.js';

export class UpdateMusicaDto extends PartialType(CreateMusicaDto) {}

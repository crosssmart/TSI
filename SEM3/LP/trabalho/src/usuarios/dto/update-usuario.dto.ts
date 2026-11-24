import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto.js';

export class UpdateUsuarioDto extends PartialType(
  // Permite atualizar apenas esses
  PickType(CreateUsuarioDto, ['nome', 'email', 'senha'] as const),
) {}

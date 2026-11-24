import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'CPF com 11 números, sem pontos ou hífen',
    example: '12345678901',
  })
  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao@email.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Senha com no mínimo 6 caracteres',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  senha: string;
}

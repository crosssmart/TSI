import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

 @IsString()
 @IsNotEmpty()
 @MinLength(6, {message: 'Senha deve ter pelo menos 6 caracteres'})
  senha: string;
}

import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProdutoDto {
  @IsString({message: '[ERRO]: nome precisa ser string!'})
  @IsNotEmpty({message: '[ERRO]: campo nome não pode ser vazio!'})
  nome: string;
  
  @IsNumber()
  @IsNotEmpty()
   preco: number;

}

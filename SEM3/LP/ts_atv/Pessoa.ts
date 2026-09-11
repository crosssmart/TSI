export class Pessoa {
  public nome: string;
  public idade: number;
  public cpf: string;
  public email: string;
  public telefone: string;

  constructor(
    nome: string,
    idade: number,
    cpf: string,
    email: string,
    telefone: string,
  ) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
  }

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  exibirDados(): void {
    console.log(
      `Email: ${this.email}, Telefone: ${this.telefone}, CPF: ${this.cpf}`,
    );
  }
}

import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
  #RA: string;

  constructor(
    nome: string,
    idade: number,
    cpf: string,
    email: string,
    telefone: string,
    RA: string,
  ) {
    super(nome, idade, cpf, email, telefone);
    this.#RA = RA;
  }

  consultarLivro(nome: string): void {
    const disponivel = Math.random() < 0.5;

    if (disponivel) {
      console.log(`"${nome}": Livro disponível na biblioteca do campus.`);
    } else {
      console.log(`"${nome}": Livro indisponível na biblioteca do campus.`);
    }
  }

  exibirDados(): void {
    console.log(
      `Email: ${this.email}\nTelefone: ${this.telefone}\nCPF: ${this.cpf}\nR.A.: ${this.#RA}`,
    );
  }
}

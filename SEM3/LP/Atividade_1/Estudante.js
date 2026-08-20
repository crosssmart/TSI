import { Pessoa } from "./Pessoa.js";

export class Estudante extends Pessoa {
  constructor(nome, email, telefone = "s/n", ra) {
    super(nome, email, telefone);
    this.ra = ra
  }

  saudacao() {
    console.log(`Olá, sou ${this.nome} e meu RA é ${this.ra}!`);
  }
}
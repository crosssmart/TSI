export class Pessoa {
  constructor(nome, email, telefone = "s/n",) {
    // Atributos
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  saudacao() {
    console.log(`Olá, sou${this.nome}!`);
  }
}
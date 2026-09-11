import { Pessoa } from "./Pessoa";
const pessoa = new Pessoa(
  "Maria",
  23,
  "123.456.789-00",
  "maria@email.com",
  "(67) 99999-8888",
);
pessoa.apresentar();
pessoa.exibirDados();
console.log("---------------------------------------");

import { Estudante } from "./Estudante";
const estudante = new Estudante(
  "João",
  20,
  "123.456.789-00",
  "joao@email.com",
  "(67) 99999-9999",
  "2024001234",
);
estudante.apresentar();
estudante.exibirDados();
console.log("");
estudante.consultarLivro("Algoritmos e Estruturas de Dados");

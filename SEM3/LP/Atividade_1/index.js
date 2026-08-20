import { Pessoa } from "./Pessoa.js";
import { Estudante } from "./Estudante.js";

const pessoa = new Pessoa('João', 'joao@email.com', '123');
const estudante1 = new Estudante('Ana', 'ana@email.com', '456', '111');
const estudante2 = new Estudante('Pedro', 'pedro@email.com', '789', '222');

pessoa.saudacao();
estudante1.saudacao();

//Code by Rogerio Filho
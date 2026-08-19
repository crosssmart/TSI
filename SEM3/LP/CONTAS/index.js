import { ContaCorrente } from "./ContaCorrente.js";
import { Conta } from "./Conta.js";

let contaDoAderbal = new ContaCorrente(12, 21, 'Aderbal', 10);
contaDoAderbal.depositar(1000);

let contaDoJoao = new Conta(13, 25, 'Joao', 200);
contaDoJoao.depositar(10);
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  imprimirExtrato() {
    this.saldo--;
    console.log(`[SALDO]: R$${this.saldo}`);
  }
}
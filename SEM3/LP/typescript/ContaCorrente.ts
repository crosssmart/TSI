import { Conta } from "./Conta";
export class ContaCorrente extends Conta {
  imprimirExtrato(): void {
    const taxaImpressao = 1;
    if (this.saldo < taxaImpressao) {
      console.log("Saldo Insuficiente! para impressão");
    } else {
      this.saldo -= taxaImpressao;
      console.log(`Saldo atual (após impressão de extrato): R$${this.saldo}`);
    }
  }
}

export class Conta {
  constructor(agencia, numero, cliente, saldo = 0) {
    // Atributos
    this.agencia = agencia;
    this.numero = numero;
    this.cliente = cliente;
    this.saldo = saldo;
  }

  // Métodos
  depositar(valor) {
    if (valor <= 0) {
      console.log('[ERRO]: Valor inválido');
    } else {
      this.saldo += valor;
      this.imprimirExtrato();
    }
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log('[ERRO]: Saldo insuficiente');
    } else if (valor <= 0) {
      console.log('[ERRO]: valor inválido');
    } else {
      this.saldo -= valor;
      this.imprimirExtrato();
    }

  }

  imprimirExtrato() {
    console.log(`[SALDO]: R$${this.saldo}`);
  }
}
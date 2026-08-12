class Conta {
  constructor(agencia, numero, cliente, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.cliente = cliente;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    } else {
      console.log('[ERRO]: Informe valor positivo');
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log('[ERRO]: Informe valor menor ou igual ao saldo!');
    }
  }

  imprimirExtrato() {
    console.log(`A conta de nr. ${this.numero} possui R$${this.saldo}`);
  }
}

var contaDoAderbal = new Conta(123, 321, 'Aderbal', 100);

contaDoAderbal.imprimirExtrato();
contaDoAderbal.depositar(100);
contaDoAderbal.imprimirExtrato();
contaDoAderbal.sacar(50);
contaDoAderbal.imprimirExtrato();
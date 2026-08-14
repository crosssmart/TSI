class Conta {
  constructor(agencia, numero, cliente, saldo = 0) {
    // o saldo = 0 indica o valor default se caso n colocar nada
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

//ContaCorrente desconta R$ 1.00 por extrato impresso
//ContaCorrente herda tudo de Conta
//ContaCorrente é filha de Conta
class ContaCorrente extends Conta {
  constructor(agencia, numero, cliente, saldo, taxa) {
    //super serve pra puxar as coisas da superclasse sem precisar repetir tudo
    super(agencia, numero, cliente, saldo);
    this.taxa = taxa;
  }

  imprimirExtrato() {
    this.saldo--;
    console.log(`A conta de nr. ${this.numero} possui R$${this.saldo}`);
  }
}




var contaDoAdrasteia = new ContaCorrente(123, 111, 'Adrasteia', 100);
contaDoAdrasteia.imprimirExtrato();
contaDoAdrasteia.imprimirExtrato();
contaDoAdrasteia.imprimirExtrato();


var contaDoAderbal = new Conta(123, 321, 'Aderbal', 100);
contaDoAderbal.imprimirExtrato();
contaDoAderbal.imprimirExtrato();
contaDoAderbal.imprimirExtrato();

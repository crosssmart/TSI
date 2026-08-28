export class Conta {
  // Atributos

  //Somente leitura: só consigo ver oq está dentro dele e para editar somente no construtor
  readonly numero: number;

  //Atributo privado somente a classe dona dele pode acessar diretamente this.#saldo
  #saldo: number;
  public cliente: string;

  //Encapsuladores - getters e setters || gets e sets
  get saldo() {
    return this.#saldo;
  }

  set saldo(valor: number) {
    this.#saldo = valor;
  }

  //Modificadores de acesso: indica o nvl de acesso dos atributos
  // private - somente a classe em que ele está pode manupular diretamente
  // protected - somente a superclasse(mãe) e subclasses(filhas) manipulam diretamente
  // public - pode ser manipulado diretamente de qualquer lugar

  constructor(numero: number, cliente: string, saldoInicial?: number) {
    //? significa que pode receber ou não
    this.numero = numero;
    this.cliente = cliente;
    this.#saldo = saldoInicial || 0;
  }

  // Métodos
  depositar(valor: number) {
    if (valor <= 0) {
      console.log("O valor do depósito");
    } else {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso!`);
    }
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser positivo");
      return;
    }
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente");
      return;
    }

    this.#saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso!`);
  }

  imprimirExtrato(): void {
    console.log(`Saldo atual: R$${this.#saldo}`);
  }
}

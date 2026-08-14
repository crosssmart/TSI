'use strict'
//para usar o modo estrito do js para não ter problema com palavras futuras reservadas

class Matematica {
  static pi = 3.141592;

  //static serve para usar o método sem precisar criar um NEW ALGO
  static soma(a, b) {
    return a + b;
  }
  static divisao(a, b) {
    return (b == 0) ? '[ERRO]: não dividido por zero!' : (a / b);
  }
}

let resultadoSoma = Matematica.soma(1, 3);
console.log(resultadoSoma);

function verificaSaldo(conta) {
  if (conta.saldo) {
    return conta.saldo;
  } else {
    return '[AVISO]: Você não tem saldo.';
  }

  // return (conta.saldo || '[AVISO]: Você não tem saldo.');
}



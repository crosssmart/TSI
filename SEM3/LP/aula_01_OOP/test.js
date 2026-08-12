// Forma Antigaaaa

function Fruta(nome, cor, forma) {
  this.nome = nome;
  this.cor = cor;
  this.forma = forma;
  this.descricao = function () {
    return `Essa fruta se chama ${this.nome} e possui a cor ${this.cor}`;
  }
}

var uva = new Fruta('Uva', 'Roxa', 'Redonda');
var Pera = new Fruta('Pera', 'Verde', 'esquisita');

console.log(uva.descricao());
console.log(pera.descricao());


//==========ES6 add o conceito das classes -  Forma recente com Class (utilizada)==============
class Fruta {
  constructor(nome, cor, forma) {
    //atributos / propriedades / características / variáveis
    this.nome = nome;
    this.cor = cor;
    this.forma = forma;
  }

  //métodos / ações / function
  descricao() {
    return `Essa fruta se chama ${this.nome} e possui a cor ${this.cor}`;
  }
}

var uva = new Fruta('Uva', 'Roxa', 'Redonda');
var pera = new Fruta('Pera', 'Verde', 'esquisita');

console.log(uva.descricao());
console.log(pera.descricao());
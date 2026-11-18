class No {
  dados
  prox = null
}

class ListaLigada {
  inicio = null
  fim = null

  inserirFim(e) {
    let novoNo = new No()
    novoNo.dados = e
    if (this.inicio == null) {
      this.inicio = novoNo
      this.fim = novoNo
    } else {
      this.fim.prox = novoNo
      this.fim = this.fim.prox
    }
  }

  inserirComeco(e) {
    let novoNo = new No()
    novoNo.dados = e
    if (this.inicio == null) {
      this.inicio = novoNo
      this.fim = novoNo
    } else {
      novoNo.prox = this.inicio
      this.inicio = novoNo
    }
  }

  topo() {
    return this.fim.dados
  }

  removerFinal() {
    let anterior = null
    let atual = this.inicio

    while (atual != this.fim) {
      anterior = atual
      atual = atual.prox
    }

    if (atual == null)
      return
    else if (anterior == null && this.inicio == this.fim) {
      this.inicio = null
      this.fim = null
    } else {
      anterior.prox = null
      this.fim = anterior
    }
  }

  remover(e) {
    let atual = this.inicio
    let anterior = null
    while (atual != null && atual.dados != e) {
      anterior = atual
      atual = atual.prox
    }
    if (atual == null)
      return
    else if (anterior == null && this.inicio == this.fim) {
      this.inicio = null
      this.fim = null
    } else if (this.inicio == atual)
      this.inicio = atual.prox
    else if (this.fim == atual) {
      this.fim = anterior
      anterior.prox = null
    } else {
      anterior.prox = atual.prox
    }
  }

  removerComeco() {
    if (this.inicio != null) {
      this.inicio = this.inicio.prox
    } else {
      return
    }
  }

  percorrer() {
    let resposta = ""
    for (let it = this.inicio; it != null; it = it.prox) {
      resposta += it.dados + " -> "
    }
    resposta += "null"
    console.log(resposta)
  }

}

class Pilha {
  pilha = new ListaLigada()

  push(e) {
    this.pilha.inserirFim(e)
  }
  pop() {
    this.pilha.removerFinal();
  }

  busca() {
    this.pilha.percorrer();
  }
}

minhaLista = new ListaLigada()
minhaLista.inserir(1)
minhaLista.inserir(2)
minhaLista.inserir(3)
minhaLista.inserir(4)
minhaLista.percorrer()
minhaLista.remover(4)
minhaLista.remover(1)
minhaLista.percorrer()
minhaLista.remover(2)
minhaLista.remover(3)
minhaLista.percorrer()

console.log('--------------');


p = new Pilha()
p.push(1);
p.push(2);
p.push(3);
p.push(4);
p.busca();

p.pop();
p.busca();

p.pop();
p.busca();

p.pop();
p.busca();

p.pop();
p.busca();

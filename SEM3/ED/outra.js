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

  removerComeco() {
    if (this.inicio != null) {
      this.inicio = this.inicio.prox
    } else {
      return
    }
  }

  buscaRemove(e) {
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

  percorrer() {
    let resposta = ""
    for (let it = this.inicio; it != null; it = it.prox) {
      resposta += it.dados + " -> "
    }
    resposta += "null"
    console.log(resposta)
  }
}

m = new ListaLigada()

m.inserirComeco(1);
m.percorrer()
m.inserirComeco(2);
m.percorrer()
m.inserirComeco(3);
m.percorrer()

m.removerFinal();
m.percorrer();

//------
m.removerComeco();
m.percorrer()
//m.removerComeco();
//m.percorrer()
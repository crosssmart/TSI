6. Escreva o código JavaScript para selecionar o elemento <h1> usando seu ID
   (suponha que ele tenha id="cabecalho")

R: document.getElementByID('cabecalho')

7. Como você selecionaria TODOS os elementos <p> dentro da div com
   id="principal" usando getElementsByTagName?

R: document.getElementsByTagName('p#principal)

8. Escreva o código para selecionar apenas o parágrafo que tem AMBAS as
   classes "texto" e "importante" usando querySelector.

R: document.querySelector('#principal .texto.importante')

9. Como você selecionaria todos os elementos <li> usando querySelectorAll?

R: document.querySelectorAll('#principal ul li')

10. Qual a principal diferença entre o retorno de getElementsByClassName e
    querySelectorAll em termos de serem "ao vivo" ou "estáticos"?

R: Que os resultados são atualizados conforme o desenvolvimento da página.

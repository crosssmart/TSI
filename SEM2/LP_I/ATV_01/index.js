import { emissorEventos } from "./emissor.js";

//Criando listener para 'nome_obtido'
emissorEventos.on('nome_obtido', (nome) => {
    console.log(nome);
})

//O código só vai mostrar os nomes dos Bancos...
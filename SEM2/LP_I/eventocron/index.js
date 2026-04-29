import { emissorEventos } from "./emissor_bitcoin.js";

const formataGrana = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl'
})

//Criando listener/ouvinte para o evento 'valor_bitcoin_obtido'
emissorEventos.on('valor_bitcoin_obtido', (preco) => {
    const precoFormatado = formataGrana.format(preco);
    console.log(precoFormatado);
})
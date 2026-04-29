const API_URL = 'https://api.coinbase.com/v2/prices/BTC-BRL/buy';

//Função que busca na API e retorna o preço do Bitcoin em Reais
//async function getBitcoinPrice(){}
export const getBitcoinPrice = async () => {
    const resposta = await fetch(API_URL);
    //const data = await resposta.json().data;
    const { data } = await resposta.json();
    const valorBitcoinEmReal = data.amount;
    return valorBitcoinEmReal
}
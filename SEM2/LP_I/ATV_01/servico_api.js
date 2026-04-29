const API = 'https://brasilapi.com.br/api/banks/v1'

export const getNameBanks = async () => {
    const resposta = await fetch(API);
    const data = await resposta.json();
    const nomeBancos = data.map(item => item.name);
    return nomeBancos
}
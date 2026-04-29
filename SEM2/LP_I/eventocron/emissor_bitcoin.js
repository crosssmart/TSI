import { EventEmitter } from 'events';
import cron from 'node-cron';
import { getBitcoinPrice } from './servico_api.js';

export const emissorEventos = new EventEmitter();

//A cada 10 segundos
const periodo = '*/4 * * * * *';

cron.schedule(periodo, async () => {
    const preco = await getBitcoinPrice();
    emissorEventos.emit('valor_bitcoin_obtido', preco)
})
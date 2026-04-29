import { EventEmitter } from 'events';
import cron from 'node-cron';
import { getNameBanks } from './servico_api.js';

export const emissorEventos = new EventEmitter();

//A cada minuto pq é muito grande
const periodo = '* * * * * *';

cron.schedule(periodo, async () => {
    const nome = await getNameBanks();
    emissorEventos.emit('nome_obtido', nome)
})
import cron from 'node-cron';

const funcao = () => {
    let horarioAtual = new Date();
    console.log('Tarefa executada às ' + horarioAtual);

}

cron.schedule('*/5 * * * * *', funcao);
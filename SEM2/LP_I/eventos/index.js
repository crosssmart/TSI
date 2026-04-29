import { EventEmitter } from 'events';
const emissorEvento = new EventEmitter();

function funcao1() {
    console.log("algo ocorreu!");
}

function funcao2() {
    console.log("outra coisa ocorreu!");
}

//Registrando funcao1 e funcao2 para eventoUm
emissorEvento.on('eventoUm', funcao1);
emissorEvento.on('eventoUm', funcao2);


//Emitindo o evento 'eventoUm'
emissorEvento.emit('eventoUm');


//Removendo a funcao1 do evento 'eventoUm'
emissorEvento.off('eventoUm', funcao1);

emissorEvento.emit('eventoUm');

//Evento Uníco, disparado somente uma vez
emissorEvento.once('eventoUnico', function () {
    console.log("evento Unico");
})


emissorEvento.once('eventoUnico2', () => {
    console.log("com arrowFunction agr!");

})

//Só vai chamar uma vez
emissorEvento.emit('eventoUnico');
emissorEvento.emit('eventoUnico');
emissorEvento.emit('eventoUnico');


//Com uma função ja criada
function boasVindas(nome) {
    console.log('Seja bem-vindo ' + nome);
}

emissorEvento.on('msgBoasVindas', boasVindas);
emissorEvento.emit('msgBoasVindas', 'Conceitual')
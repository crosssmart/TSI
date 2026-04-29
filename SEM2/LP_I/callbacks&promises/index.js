import { ehPar, ehParV2, ehParV3 } from "./matematica.js";

//V1 do ehPar
//console.log(ehPar(5));

//V2 do ehPar
/*
ehParV2(10)
    .then((resultado) => {
        console.log("Promessa resolvida: ", resultado);
    })
    .catch((erro) => {
        console.log("Promessa rejeitada: ", erro);
    })
*/

//V3 (Promise + API)

ehParV3(4)
    .then((res) => console.log("Promessa resolvida! " + res))
    .catch((error) => console.log("Promessa rejeitada! " + error))

ehParV3("oi")
    .then((res) => console.log("Promessa resolvida! " + res))
    .catch((error) => console.log("Promessa rejeitada! " + error))


//V3 (async e await)
const executar = async () => {
    await ehParV3(4)
        .then((res) => console.log("Promessa resolvida! " + res))
        .catch((error) => console.log("Promessa rejeitada! " + error))

    await ehParV3("oi")
        .then((res) => console.log("Promessa resolvida! " + res))
        .catch((error) => console.log("Promessa rejeitada! " + error))
}
executar();

//IIFE (Immediatly Invoked Function Expression)
; (async () => {
    await ehParV3(4)
        .then((res) => console.log("Promessa resolvida! " + res))
        .catch((error) => console.log("Promessa rejeitada! " + error))

    await ehParV3("oi")
        .then((res) => console.log("Promessa resolvida! " + res))
        .catch((error) => console.log("Promessa rejeitada! " + error))
})()
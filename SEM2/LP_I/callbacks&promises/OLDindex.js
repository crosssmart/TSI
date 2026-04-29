/*import * as fs from 'node:fs';

const dados = 'Texto';*/

//V1 - callback
/*fs.writeFile('./arquivo1.txt', dados, () => {
    console.log('Arquivo 1 gerado com sucesso!');
});

//V2 - callback hell
fs.writeFile('./arquivo2.txt', dados, () => {
    console.log('Arquivo 2 gravado com sucesso!');
    fs.writeFile('./Arquivo3.txt', dados, () => {
        console.log('Arquivo 3 gravado com sucesso!');
    })
})
*/


//Promises
import * as fs from 'node:fs/promises';
const dados = 'Texto texto'

fs.writeFile('./arquivo1.txt', dados)
    .then(() => {
        console.log('Arquivo1 gravado com sucesso!');
        return fs.writeFile('./arquivo2.txt', dados);
    })
    .then(() => {
        console.log('Arquivo2 gravado com sucesso!');
    })
    .catch((error) => {
        console.log('Erro ao gravar arquivo!');
        console.log(error);
    })
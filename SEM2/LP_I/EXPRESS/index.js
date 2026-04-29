const express = require('express');
const api = express();

//Para poder receber o json
api.use(express.json());
const porta = 3000;

//http://127.0.0.1:3000
//http://localhost:3000

//CRUD (4 operações abaixo) de pessoa
//CREATE - Criar/Cadastrar pessoa (POST)
//READ - Ler/Puxar pessoa(s) (GET)
//UPDATE - Atualizar dados de uma pessoa (PUT/PATCH)
//DELETE - Remover uma pessoa (DELETE)

//Simulando um BD

let pessoas = [
    { nome: 'nome1', idade: 45 },
    { nome: 'nome2', idade: 35 },
    { nome: 'nome3', idade: 15 }
]
//--------------CRUD pessoas---------------

//READ do Crud
api.get('/pessoas', (req, res) => {
    res.send(pessoas);
})

//Create do Crud
api.post('/pessoa', (req, res) => {
    const novaPessoa = req.body;

    //Verificando se foram enviados 'nome' e 'idade'
    if (!novaPessoa.nome || !novaPessoa.idade) {
        return res.send('[Erro]: informar nome e idade!');
    }

    //Adicionando a pessoa no vetor
    pessoas.push(novaPessoa);
    res.send('[SUCESSO]: Pessoa cadastrada!');
})

//DELETE do CRUD
api.delete('/pessoa', (req, res) => {
    const pessoaParaDeletar = req.body;

    //Simulando que as pessoas tem ID no "BD" (vetor pessoas)
    if (!pessoaParaDeletar.id) {
        return res.send("[ERRO] informar ID!");
    }

    //Removendo do vetor pessoas a pessoa de índice passado como ID
    pessoas.splice(pessoaParaDeletar.id, 1);
    res.send('[SUCESSO]: pessoa removida!');
})


//UPDATE do CRUD
api.put('/pessoa', (req, res) => {
    const pessoaParaEditar = req.body;

    if (!pessoaParaEditar.id || !pessoaParaEditar.nome || !pessoaParaEditar.idade) {
        return res.send('[ERRO]: Informar nome, idade e ID!');
    }

    pessoas[pessoaParaEditar.id] = pessoaParaEditar;
    res.send('[SUCESSO]: Pessoa editada!')
})

api.get('/status', (req, res) => {
    res.send('API Online!');
})

api.listen(porta, () => {
    console.log(`API rodando na porta ${porta}`);
})
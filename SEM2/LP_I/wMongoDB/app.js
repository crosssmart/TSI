const express = require('express');
const api = express();
api.use(express.json()); // Para poder usar o req.body
const porta = 3000;

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://RogerioFilho:vmpb2016@cluster0.tur3mnb.mongodb.net/?appName=Cluster0');

mongoose.connection.on('connected', () => {
    console.log('API conectada ao BD!');
})

mongoose.connection.on('disconnected', () => {
    console.log('API desconectada ao BD!');
})

mongoose.connection.on('error', (erro) => {
    console.log('[ERRO] API não conectada ao BD!');
    console.log(erro);
})

const produtosController = require('./controller/produto.js');
//Mostrar
api.get('/produtos', produtosController.listarProdutos);

//Adicionar
api.post('/produto', produtosController.adicionarProduto);

//Remover
api.delete('/produto', produtosController.removerProduto);

//Editar
api.put('/produto', produtosController.editarProduto);

api.listen(porta, () => {
    console.log('API rodando na porta ', porta);
})
const express = require('express');
const api = express();
api.use(express.json()); // Para poder usar o req.body
const porta = 3000;
const mongoose = require('mongoose');
//Corrigir erro do MongoDB Atlas com o node que as vezes pode dar:
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

// Configurando o dotenv para ler as variáveis de ambiente do arquivo .env
require('dotenv').config();
const URL_BD = process.env.URL_BD || '';
mongoose.connect(URL_BD);

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
const usuarioController = require('./controller/usuario.js');

api.post('/usuario', usuarioController.registrarUsuario);

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
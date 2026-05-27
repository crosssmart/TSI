// Seria meio que um Banco de Dados onde fica armazena uma biblioteca de músicas lançadas,
// que armazena, título, artista, isrc(código único), duração e data de lançamento.

// by Rogerio Filho

const express = require('express');
const api = express();
api.use(express.json());

const porta = 8888;

const mongoose = require('mongoose');
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.connect('mongodb+srv://RogerioFilho:rogerio.filho@cluster0.tur3mnb.mongodb.net/?appName=Cluster0');

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

const trackController = require('./controller/track.js');
//Mostrar
api.get('/tracks', trackController.listarTracks);

//Lançar
api.post('/track', trackController.lancarTrack);

//Remover
api.delete('/track', trackController.removerTrack);

//Editar
api.put('/track', trackController.editarTrack);

api.listen(porta, () => {
  console.log('API rodando na porta ', porta);
})  
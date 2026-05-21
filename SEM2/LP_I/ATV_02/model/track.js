const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//ISRC é International Standard Recording Code, é tipo um código unico pra cada música distribuída em alguma plataforma digital

const TrackSchema = new Schema({
  titulo: { type: String, required: true },
  artista: { type: String, required: true },
  isrc: { type: Number, required: true, unique: true },

  //imaginei entrado o dado de duração em seg
  duracao: { type: Number, required: true },
  lancamento: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Tracks', TrackSchema);

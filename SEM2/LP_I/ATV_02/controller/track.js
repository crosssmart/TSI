const Tracks = require('../model/track.js');

exports.listarTracks = async (req, res) => {
  try {
    const tracks = await Tracks.find({});
    res.send(tracks);
  } catch (erro) {
    console.log(erro);
    console.log("[ERRO] Deu erro na API!");
  }
}

exports.lancarTrack = async (req, res) => {
  const novaTrack = req.body;

  if (!novaTrack.titulo || !novaTrack.artista || !novaTrack.isrc || !novaTrack.duracao) {
    res.send('[ERRO]: Informar ao informar algum dado da Track!');
  } else {
    try {
      const track = await Tracks.create(novaTrack);
      res.send({ msg: '[SUCESSO]: Track lançada!', detalhes: track });
    } catch (erro) {
      console.log(erro);
      res.send({ msg: '[ERRO]: No lançamento da Track', detalhes: erro });
    }
  }
}

exports.removerTrack = async (req, res) => {
  const track = req.body;
  if (!track.isrc) {
    return res.send({ msg: '[ERRO]: informar título ou ISRC!' });
  }

  try {
    const trackRemovida = await Tracks.findOneAndDelete({ isrc: track.isrc });

    if (trackRemovida == null) {
      res.send({ msg: '[AVISO]: Track não existe no BD!' });
    } else {
      res.send({ msg: '[SUCESSO]: Track removida do BD!' });
    }

  } catch (erro) {
    console.log(erro);
    res.send({ msg: '[ERRO]: ao remover Track!', detalhes: erro });
  }
}

exports.editarTrack = async (req, res) => {
  const track = req.body;
  if (!track.isrc) {
    return res.send({ msg: '[ERRO]: ao informar algum dado da Track' });
  }

  try {
    const trackEditada = await Tracks.findOneAndUpdate(
      { isrc: track.isrc },
      { titulo: track.titulo, artista: track.artista, duracao: track.duracao, lancamento: track.lancamento },
    );

    if (trackEditada == null) {
      res.send({ msg: '[AVISO]: Track não existe no BD!' });
    } else {
      res.send({ msg: '[SUCESSO]: Track editada do BD!' });
    }

  } catch (erro) {
    console.log(erro);
    res.send({ msg: '[ERRO]: ao editar a track!', detalhes: erro });
  }
}
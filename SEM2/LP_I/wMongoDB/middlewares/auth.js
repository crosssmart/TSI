const Usuario = require('../model/usuario.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const chavePrivada = process.env.CHAVE_JWT || '';


exports.autenticar = (req, res, next) => {
  // recebo um token (chave) e verifico se é valido
  // se for valido -> "continua para a próxima função" next();
  // se NÃO for valido -> res.send("Sem permissão");

  const token = req.headers['authorization'].replace('Bearer ', '');
  if (!token) {
    return res.send('[ERRO]: Enviar token JWT!');
  }

  jwt.verify(token, chavePrivada, (erro, infoUsuario) => {
    if (erro) {
      return res.send('[Erro]: Token invalido ou expirado!');
    }
    //caso queira info do usuario só pegar no infoUsuario
    next();
  })
}

exports.logar = async (req, res) => {
  // const email = req.body.email;
  // const senha = req.body.senha;
  // equivalente
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.send('[ERRO]: informar email e senha');
  }

  const usuarioBD = await Usuario.findOne({ email: email });
  if (!usuarioBD) {
    return res.send('[ERRO]: Usuário não existe!');
  }

  const senhaCorreta = await bcrypt.compare(senha, usuarioBD.senha);
  if (senhaCorreta) {

    //Deletando pra n ir a senha junto
    delete usuarioBD.senha;
    //Criando o JWT
    jwt.sign(usuarioBD.toJSON(), chavePrivada, { expiresIn: '1d' }, (erro, token) => {
      if (erro) {
        return res.send('[Erro]: geração JWT!');
      }

      res.send({ token: token });
    })
  } else {
    res.send('Usuário ou senha incorretos');
  }
}
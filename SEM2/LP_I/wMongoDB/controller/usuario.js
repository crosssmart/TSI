const Produtos = require('../model/usuario.js');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  if (!nome || !email || !senha) {
    return res.send({ msg: '[ERRO]: Informar nome, email e senha!' });
  }

  try {
    const usuarioJahExiste = await Usuario.findOne({ email: email });
    if (usuarioJahExiste) {
      return res.send({ msg: '[ERRO]: Já existe um usuário com esse email!' });
    }

    const senhaEncriptada = await bcrypt.hash(senha, 10);

    const novoUsuario = {
      nome: nome,
      email: email,
      // Tem que ser encriptado nesse caso com o (bcrypt)
      senha: senhaEncriptada
    }

    await Usuario.create(novoUsuario);
    res.send('[SUCESSO]: Usuario criado com sucesso!');

  } catch (erro) {
    console.log(erro);
    res.send({ msg: '[ERRO]: Erro ao cadastrar usuario', detalhes: erro });
  }
}
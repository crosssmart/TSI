import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { Usuario } from './entities/usuario.entity.js';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt-ts';
import jwt from 'jsonwebtoken';

const CHAVE_JWT = process.env.CHAVE_JWT || 'fallback-dev-only';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: MongoRepository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const novoUsuario = new Usuario();
      novoUsuario.nome = createUsuarioDto.nome;
      novoUsuario.email = createUsuarioDto.email;
      novoUsuario.senha = await hash(createUsuarioDto.senha, 10);

      const salvo = await this.usuarioRepository.save(novoUsuario);

      // Remove a senha antes de devolver
      const { senha, ...usuarioSemSenha } = salvo;

      return {
        mensagem: 'Usuário cadastrado com sucesso!',
        usuario: usuarioSemSenha,
      };
    } catch (erro) {
      return { mensagem: 'Falha ao cadastrar usuário.' };
    }
  }

  async login(email: string, senha: string) {
    const usuarioDB = await this.usuarioRepository.findOneBy({ email: email });
    if (usuarioDB === null) return 'Usuário não cadastrado!';
    const senhaCorreta = await compare(senha, usuarioDB.senha);

    if (senhaCorreta) {
      const dadosParaEncriptar = {
        nome: usuarioDB.nome,
        email: usuarioDB.email,
      };
      const token = await jwt.sign(dadosParaEncriptar, CHAVE_JWT);
      return { token_jwt: token };
    }
    return '[ERRO]: Usuário ou senha incorretos!';
  }

  async findAll() {
    const usuarios = await this.usuarioRepository.find();
    return usuarios.map(({ senha, ...resto }) => resto);
  }

  async findOne(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ _id: id } as any);
    if (!usuario) return { mensagem: 'Usuário não encontrado.' };
    const { senha, ...resto } = usuario;
    return resto;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({ _id: id } as any);
    if (!usuario) return { mensagem: 'Usuário não encontrado.' };

    if (updateUsuarioDto.nome !== undefined) {
      usuario.nome = updateUsuarioDto.nome;
    }
    if (updateUsuarioDto.email !== undefined) {
      usuario.email = updateUsuarioDto.email;
    }
    if (updateUsuarioDto.senha !== undefined) {
      usuario.senha = await hash(updateUsuarioDto.senha, 10);
    }

    const atualizado = await this.usuarioRepository.save(usuario);
    const { senha, ...resto } = atualizado;
    return { mensagem: 'Usuário atualizado com sucesso.', usuario: resto };
  }

  async remove(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ _id: id } as any);
    if (!usuario) return { mensagem: 'Usuário não encontrado.' };

    await this.usuarioRepository.delete(id);
    return { mensagem: 'Usuário removido com sucesso.' };
  }
}

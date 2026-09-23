import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Produto } from './entities/produto.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: MongoRepository<Produto>,
    //se for relacional Repository<Produto>
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    const novoProduto = new Produto();
    novoProduto.nome = createProdutoDto.nome;
    novoProduto.preco = createProdutoDto.preco;
    return this.produtoRepository.save(novoProduto);
  }

  findAll() {
    return this.produtoRepository.find();
  }

  findOne(id: string) {
    return this.produtoRepository.findOneBy({
      _id: new ObjectId(id),
    });
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    const produto = await this.produtoRepository.findOneBy({
      _id: new ObjectId(id),
    });

    if (!produto) {
      return `Produto com ID ${id} não encontrado`;
    }

    this.produtoRepository.merge(produto, updateProdutoDto);

    await this.produtoRepository.save(produto);
    return {
      message: 'Atualizado com Sucesso!',
      produto,
    };
  }

  async remove(id: string) {
    const produto = await this.produtoRepository.findOneBy({
      _id: new ObjectId(id),
    });

    if (!produto) {
      return `Produto com ID ${id} não encontrado`;
    }

    await this.produtoRepository.remove(produto);
    return {
      message: 'Deletado com Sucesso!',
      produto,
    };
  }
}

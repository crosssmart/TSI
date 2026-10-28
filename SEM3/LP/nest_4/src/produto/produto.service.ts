import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
import { MongoRepository } from 'typeorm';
import { Produto } from './entities/produto.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: MongoRepository<Produto>
    //se for relacional Repository<Produto>
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    //const novoProduto = new Produto();
    //novoProduto.nome = createProdutoDto.nome;
    //novoProduto.preco = createProdutoDto.preco;
    return this.produtoRepository.save(createProdutoDto);
  }

  findAll() {
    return this.produtoRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} produto`;
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: string) {
    return `This action removes a #${id} produto`;
  }
}

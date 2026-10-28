import { Column, CreateDateColumn, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Produto {
  //@PrimaryGeneratedColumn() para BD relacional
  @ObjectIdColumn()
  _id: string;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @CreateDateColumn()
  create_at: Date;
}

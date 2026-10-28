import { ObjectId } from "mongodb";
import { Column, CreateDateColumn, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Usuario {
  @ObjectIdColumn()
  _id:ObjectId;
  @Column('text')
  nome: string;
  @Column('text')
  email: string;
  @Column('text')
  senha: string;
  @CreateDateColumn()
  create_at: Date;
}

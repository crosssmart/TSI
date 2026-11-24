import {Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('musicas')
export class Musica {
  @ObjectIdColumn()
  _id: string;
  
  @Column({ length: 200 })
  titulo: string;

  @Column({ length: 100 })
  artista: string;

  @Column({ length: 100, nullable: true }) // Campo opcional
  album: string;

  @Column({ type: 'int', nullable: true })
  duracaoSegundos: number;
}

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class brand extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    image!: string;
}
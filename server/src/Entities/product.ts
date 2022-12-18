import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class product extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    price!: number;
    @Column()
    image!: string;
}
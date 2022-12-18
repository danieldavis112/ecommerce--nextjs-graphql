import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class order extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    date!: string;
    @Column()
    customerid!: number;
}
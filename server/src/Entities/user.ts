import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    emailaddress!: string;
    @Column()   
    password!: string;
    @Column()   
    mobilenumber!: number;
}
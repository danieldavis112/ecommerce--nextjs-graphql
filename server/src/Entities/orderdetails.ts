import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class orderdetails extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    orderid!:number;
    @Column()
    productid!:number;
    @Column()
    quantity!:number;
    @Column()
    price!:number;
    @Column()
    total!:number;
    @Column()
    customerid!:number;
    
    
}
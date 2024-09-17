import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("products")
export default class Product extends BaseEntity{
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    price:number;
}
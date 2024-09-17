import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("permission")
export default class Permission extends BaseEntity{
    @Column()
    name:string;
    @Column()
    description:string;
}
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import Permission from "./Permission";

@Entity("roles")
export default class Roles extends BaseEntity{
    @Column()
    name:string;
    @Column()
    description:string;
    @ManyToMany(() => Permission)
    @JoinTable({
        name:"permission_roles",
        joinColumns:[{name:"role_id"}],
        inverseJoinColumns:[{name:"permissin_id"}],
    })
    permission:Permission[];
}
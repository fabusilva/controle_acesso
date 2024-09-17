import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import Roles from "./Role";
import Permission from "./Permission";

@Entity("entities")
export default class User extends BaseEntity{
    @Column()
    email:string;
    @Column()
    password:string;
    @ManyToMany(() => Roles)
    @JoinTable({
        name:"users_roles",
        joinColumns:[{name:"user_id"}],
        inverseJoinColumns:[{name:"role_id"}]
    })
    roles:Roles

    @ManyToMany(() =>Permission)
    @JoinTable({
        name:"users_permission",
        joinColumns:[{name:"user_id"}],
        inverseJoinColumns:[{name:"permission_id"}]
    })
    permission:Permission
}
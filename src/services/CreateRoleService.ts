import { RoleDTO } from "../dto/Role.dto";
import Roles from "../entities/Role";
import {RoleRepository} from "../repositories";
export class CreateRoleService{
    async execute({name,description}: RoleDTO): Promise<Roles | Error>{
        const roleExist = await RoleRepository.findOne({where:{name}});
        if(roleExist){
            return new Error("Role já existe");
        }
        const role = RoleRepository.create({ name, description });
        await RoleRepository.save(role);
        return role;
    }
}
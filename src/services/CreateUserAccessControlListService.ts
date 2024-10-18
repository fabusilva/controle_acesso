import { AccessControlList } from "../dto/AccessControlList.dto";
import User from "../entities/User";
import {UserRepository } from "../repositories";
import { PermissionRepository } from "../repositories";
import { RoleRepository } from "../repositories";
export class CreateuserAccessControlListService {
    async execute({ userId, roles, permissions }: AccessControlList): Promise<User | Error> {
        const user = await UserRepository.findOne({ where: { id: userId } });
        if (!user) {
            return new Error("Usuario não existe");
        };
        const permissionsExists = await Promise.all(permissions.map(async (index) => {
            return await PermissionRepository.find({ where: { id: index } })
        }));
        console.log(`Log de permission: ${permissionsExists}`);
        if (permissionsExists.some(permission => !permission)) {
            return new Error("Uma ou mais permissões são inválidas");
        };
        const rolesExists = await Promise.all(roles.map(async (index) =>{
            return await RoleRepository.find({where:{id:index}})
        }));
        console.log(`Log de roles: ${rolesExists}`);
        if(rolesExists.some(role => !role)){
            return new Error("Uma ou mais permissões são inválidas");
        };
        user.permissions = permissionsExists.flat()
        user.roles = rolesExists.flat()
        return user
    }
}
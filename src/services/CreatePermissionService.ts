import { PermissionDTO } from "../dto/Permission.dto";
import Permission from "../entities/Permission";
import { PermissionRepository } from "../repositories";

export class CreatePermissionService {
    async execute({ name, description }: PermissionDTO): Promise<Error | Permission> {
        const permissionExist = await PermissionRepository.findOne({ where: { name } });
        if (permissionExist) {
            return new Error("Permissão já existe!");
        }
        const permission = PermissionRepository.create({ name, description });
        await PermissionRepository.save(permission);
        return permission;
    }
}
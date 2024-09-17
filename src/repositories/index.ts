import { AppDataSource } from "../database/data-source"
import Permission from "../entities/Permission"
import Product from "../entities/Product"
import Roles from "../entities/Role"
import User from "../entities/User"

export const ProductRepository = AppDataSource.getRepository(Product);
export const UserRepository = AppDataSource.getRepository(User);
export const PermissionRepository = AppDataSource.getRepository(Permission);
export const RoleRepository = AppDataSource.getRepository(Roles);
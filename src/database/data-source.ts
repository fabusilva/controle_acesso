import "reflect-metadata";
import { DataSource } from "typeorm";
import Product from "../entities/Product";
import Permission from "../entities/Permission";
import Roles from "../entities/Role";
import User from "../entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "teste",
  synchronize: true,
  logging: false,
  entities: [Product, Permission, Roles, User],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});

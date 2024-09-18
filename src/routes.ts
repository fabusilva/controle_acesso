import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllProductsController } from "./controllers/GetAllProductsController";
import { SessionController } from "./controllers/SessionController";
import { ensuredAuthenticated } from "./middleware/ensuredAuthenticated";
import { CreatePermissionController } from "./controllers/CreatePermissionController";

const router = Router();

const createUserController = new CreateUserController();
const sessionController = new SessionController();

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();

const createRoleController = new CreateRoleController();

const createPermissionController = new CreatePermissionController();

const ensured = ensuredAuthenticated();

router.post("/users", createUserController.handle);
router.post("/login", sessionController.handle);

router.post("/products", createProductController.handle);
router.get("/products", getAllProductsController.handle);

router.post("/roles",ensured, createRoleController.handle);
router.post("/permissions", ensured, createPermissionController.handle);
export { router };

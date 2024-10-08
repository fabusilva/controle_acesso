import { Request, Response } from "express";
import { CreatePermissionService } from "../services/CreatePermissionService";

export class CreatePermissionController {
    async handle(req: Request, res: Response) {
        const { name, description } = req.body;
        const createPermissionService = new CreatePermissionService();
        try {
            const result = await createPermissionService.execute({ name, description });
            if (result instanceof Error) {
                return res.status(400).json({ error: result.message });
            }
            return res.json(result);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

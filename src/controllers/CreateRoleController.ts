import { Request, Response } from "express";
import { CreateRoleService } from "../services/CreateRoleService";

export class CreateRoleController{
    async handle(req:Request, res:Response){
        const {name,description} = req.body;
        const userId = res.locals.userId;
        //console.log(userId)
        const createRoleService = new CreateRoleService();
        const result = await createRoleService.execute({name,description});
        if(result instanceof Error){
            return res.status(400).json(result.message);
        }
        return res.json(result);
    }
}
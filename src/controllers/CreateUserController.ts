import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController{
    async handle(req:Request, res:Response){
        const {email,password} = req.body;
        const createuserService = new CreateUserService();
        const result = await createuserService.execute({email,password});
        if(result instanceof Error){
            return res.status(4040).json(result.message);
        }
        return res.json(result)
    }
}
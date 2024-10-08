import { Request, Response } from "express";
import { SessionServise } from "../services/SessionService";

export class SessionController{
    async handle(req:Request, res:Response){
        const {email,password} = req.body;
        const sessionService = new SessionServise();
        const result = await sessionService.execute({email,password});
        if(result instanceof Error){
            return res.status(400).json(result.message)
        }
        return res.json(result)
    }
}
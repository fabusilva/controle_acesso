import { Request, Response } from "express";
import { CreateProductsService } from "../services/CreateProductsService";

export class CreateProductController{
    async handle(req:Request, res:Response){
        const {name,description,price} = req.body;
        const createProductService = new CreateProductsService();
        const product = await createProductService.execute({name,description,price});
        return res.json(product)
    }
}
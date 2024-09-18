import Product from "../entities/Product";
import {ProductRepository} from "../repositories"
export class GetAllProductsService{
    async execute():Promise<Error|Product[]>{
        const products = await ProductRepository.find();
        return  products
    }
}
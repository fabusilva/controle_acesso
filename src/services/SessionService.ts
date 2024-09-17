import { UserDTO } from "../dto/User.dto";
import { compare } from "bcryptjs";
import {UserRepository} from "../repositories";
import { sign } from "jsonwebtoken";
export class SessionServise{
    async execute({email, password}:UserDTO){
        const repository = UserRepository;
        const user = await repository.findOne({where:{email}});
        if(!user){
            return new Error("Usuario não existe!");
        }
        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            return new Error("Senha incorreta!");
        }
        const token = sign({}, process.env.SECRET_JWT,{
            subject:user.id,
        });
        return {token}
    }
}
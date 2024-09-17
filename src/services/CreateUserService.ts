import { hash } from "bcryptjs"; 
import { UserDTO } from "../dto/User.dto";
import User from "../entities/User";
import { UserRepository } from "../repositories";

export class CreateUserService {
  async execute({ email, password }: UserDTO): Promise<Error | User> {
    const existUser = await UserRepository.findOne({ where: { email } });
    if (existUser) {
      return new Error("Usuário já cadastrado");
    }
    const passwordHash = await hash(password, 8);
    const user = UserRepository.create({ email, password: passwordHash });
    await UserRepository.save(user);

    return user;
  }
}

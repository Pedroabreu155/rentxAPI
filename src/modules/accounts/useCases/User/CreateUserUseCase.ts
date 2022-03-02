import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/user/interfaces";
import { hash } from 'bcrypt'

@injectable()
export class CreateUserUseCase {

  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}


  async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

    const hashedPassword = await hash(password, 8)

    await this.usersRepository.create({
      name,
      password: hashedPassword,
      email,
      driver_license
    })
  }
}

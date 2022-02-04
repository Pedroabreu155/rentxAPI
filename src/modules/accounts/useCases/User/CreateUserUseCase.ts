import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/user/interfaces";

@injectable()
export class CreateUserUseCase {

  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}


  async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      password,
      email,
      driver_license
    })
  }
}
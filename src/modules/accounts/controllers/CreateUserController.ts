import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "../useCases/User/CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, username, password, email, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ driver_license, email, name, password, username });

    return response.status(201).send()
  }
}

import { Inject, Injectable } from "@nestjs/common";
import { EncodingHelper } from "src/shared/encoding.helper";
import { User } from "../entities/User";
import { IUser } from "../interfaces/IUser";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserService } from "../interfaces/IUserService";
import { UserRepository } from "../repositories/UserRepository";

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly encodingHelper: EncodingHelper,
  ) { }

  async hashPassword(password: string): Promise<string> {
    return await this.encodingHelper.hashData(password, 10);
  }

  async findAll(): Promise<IUser[]> {
    return await this.userRepository.findAll();
  }

  async findById(id: number): Promise<IUser> {
    return await this.userRepository.findById(id);
  }

  async create(data: IUser): Promise<IUser> {
    data.password = await this.hashPassword(data.password);
    return await this.userRepository.create(data);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.userRepository.remove(id);
    return !!result;
  }

  async update(id: number, data: User): Promise<boolean> {
    if(data.password) { data.password = await this.hashPassword(data.password) }
    const result =  await this.userRepository.update(id, data);
    return !!result
  }

  async findOneByName(username: string): Promise<IUser> {
    return await this.userRepository.findOneByName(username);
  }
}
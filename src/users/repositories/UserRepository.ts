import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { User } from "../entities/User";
import { IUser } from "../interfaces/IUser";
import { IUserRepository } from "../interfaces/IUserRepository";



@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
   @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    // super(userRepository);
  }

  async create(data: IUser): Promise<User> {
    return await this.userRepository.save(data);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({where: {id}});
  }

  async update(id: number, data: User): Promise<boolean> {
    const result =  await this.userRepository.update(id, data);
    return !!result.affected;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return !!result.affected;
  }

  async findOneByName(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { username },
      relations : {
        role: true
      }
    })
  }
}
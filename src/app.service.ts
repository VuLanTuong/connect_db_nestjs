import { Injectable } from '@nestjs/common';
import { User } from './app.model.user';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  async getUserById(id: number): Promise<User> {
    const options: FindOneOptions<User> = {
      where: { id },
    };
    return this.userRepository.findOne(options);
  }
}

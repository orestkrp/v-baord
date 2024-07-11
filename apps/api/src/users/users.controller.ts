import { Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(user: CreateUserDTO) {}
}

import { UsersService } from './users.service';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(
      private readonly userService: UsersService
  ) {}

  @MessagePattern('login')
  async login(credentials: any): Promise<any> {
    return this.userService.login(credentials.credentials);
  }
}
import { Controller, Get } from '@nestjs/common';

@Controller('/api/users')
export class UsersController {
  constructor() {}

  @Get()
  getHome() {
    return { message: 'Hello world!' };
  }
}

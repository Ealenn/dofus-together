import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from '../../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHome() {
    return { message: 'Hello world!' };
  }

  @Post('/pool')
  @Render('index')
  postPool() {
    return this.getHome();
  }
}

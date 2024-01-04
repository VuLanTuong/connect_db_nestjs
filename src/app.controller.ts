import { Body, Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './app.model.user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.appService.getUsers();
    return users;
  }

  @Get("/new")
  getNewProject(): string {
    return "this is new project"
  }

  @Get('/:id')
  async getUserById(@Param('id') id: number): Promise<User> {
    const user = await this.appService.getUserById(id);
    return user;
  }

  @Get("/test")
  @Render('index')
  loadTemplate() {
    return { message: 'Hello world!' };
  }
}

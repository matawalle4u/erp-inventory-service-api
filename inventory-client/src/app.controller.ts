import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('total-items')
  getHello(): Observable<number> {
    return this.appService.getTotalItems([1, 2, 3, 4, 5]);
  }
}

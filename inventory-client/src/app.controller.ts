import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('INVENTORY_SERVICE') private readonly client: ClientProxy
  ) {}

  @Get()
  getHello(): Observable<number> {
    return this.client.send({ cmd: 'sum' }, [1, 2, 3, 4, 5]);
  }
}

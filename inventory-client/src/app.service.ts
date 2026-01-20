import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('INVENTORY_SERVICE') private readonly client: ClientProxy) {}
  getTotalItems(numbers: number[]): Observable<number> {
    return this.client.send({ cmd: 'sum' }, numbers);
  }
}

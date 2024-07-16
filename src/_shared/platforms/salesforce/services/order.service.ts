import { Injectable, NotImplementedException } from '@nestjs/common';
import { IOrderService } from '../../types';

@Injectable()
export class OrderService implements IOrderService {
  async getOrderById(id: string): Promise<any> {
    throw new NotImplementedException();
  }

  async getOrders(): Promise<any> {
    throw new NotImplementedException();
  }
}
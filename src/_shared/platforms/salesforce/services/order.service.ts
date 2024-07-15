import { Injectable } from '@nestjs/common';
import { IOrderService } from '../../types';

@Injectable()
export class OrderService implements IOrderService {
  async getOrderById(): Promise<any> {

  }

  async getOrders(): Promise<any> {

  }
}
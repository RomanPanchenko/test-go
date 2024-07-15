import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseOrderService {
  async getOrderById(id: string | number, params: any): Promise<any> {

  }

  async getOrders(): Promise<any> {

  }
}
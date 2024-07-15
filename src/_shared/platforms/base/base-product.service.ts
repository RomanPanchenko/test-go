import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseProductService {
  async getOrderById(id: string | number, params: any): Promise<any> {

  }
}
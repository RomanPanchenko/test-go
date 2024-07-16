import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import urlJoin from 'url-join';
import { SHOPIFY } from './constants';
import { IOrderService } from '../../types';

@Injectable()
export class OrderService implements IOrderService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async getOrderById(id: number): Promise<any> {
    const url = urlJoin(SHOPIFY.URL, 'orders', `${id}.json`);

    const response = await this.httpService.get(url, {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY.API_KEY,
      },
    });

    console.log(response);

    return response; //.data;
  }

  async getOrders(): Promise<any> {

  }
}
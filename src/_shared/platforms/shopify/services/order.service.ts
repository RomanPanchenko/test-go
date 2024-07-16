import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { urlJoin } from 'url-join-ts';
import { SHOPIFY } from './constants';
import { IOrderService } from '../../types';

@Injectable()
export class OrderService implements IOrderService {
  constructor() {}

  async getOrderById(id: number): Promise<any> {
    const url = urlJoin(SHOPIFY.URL, 'orders', `${id}.json`);

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY.ACCESS_TOKEN,
      },
    });

    return response.data;
  }

  async getOrders(): Promise<any> {
    const url = urlJoin(SHOPIFY.URL, 'orders.json', '?status=any');

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY.ACCESS_TOKEN,
      },
    });

    return response.data;
  }
}
import axios from 'axios';
import stringify from 'fast-safe-stringify';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { SHOPIFY } from './constants';
import { IOrderService } from '../../types';
import { urlJoin } from './../../../../_common/url-join';

@Injectable()
export class OrderService implements IOrderService {
  constructor() {}

  async getOrderById(id: number): Promise<any> {
    try {
      const url = urlJoin(SHOPIFY.URL, 'orders', `${id}.json`);

      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': SHOPIFY.ACCESS_TOKEN,
        },
      });

      return response.data;
    } catch (e) {
      const message = `Error getting shopify order: ${id}` + e.response?.data ? stringify(e.response.data) : e.message;
      Logger.error(message);
      throw new HttpException(message, e.response?.status || HttpStatus.BAD_REQUEST);
    }
  }

  async getOrders(): Promise<any> {
    try {
      const url = urlJoin(SHOPIFY.URL, 'orders.json', '?status=any');

      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': SHOPIFY.ACCESS_TOKEN,
        },
      });

      return response.data;
    } catch (e) {
      const message = 'Error getting shopify orders: ' + e.response?.data ? stringify(e.response.data) : e.message;
      Logger.error(message);
      throw new HttpException(message, e.response?.status || HttpStatus.BAD_REQUEST);
    }
  }
}
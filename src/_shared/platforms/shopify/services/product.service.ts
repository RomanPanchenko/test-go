import axios from 'axios';
import stringify from 'fast-safe-stringify';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { IProductService } from '../../types';
import { SHOPIFY } from './constants';
import { urlJoin } from './../../../../_common/url-join';

@Injectable()
export class ProductService implements IProductService {
  async create(productData: any): Promise<any> {
    try {
      const url = urlJoin(SHOPIFY.URL, 'products.json');

      const response = await axios.post(url, { product: productData }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': SHOPIFY.ACCESS_TOKEN,
        },
      });

      return response.data;
    } catch (e) {
      const message = 'Error creating shopify product: ' + e.response?.data ? stringify(e.response.data) : e.message;
      Logger.error(message);
      throw new HttpException(message, e.response?.status || HttpStatus.BAD_REQUEST);
    }
  }
}
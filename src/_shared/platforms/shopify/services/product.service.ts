import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { IProductService } from '../../types';
import { SHOPIFY } from './constants';
import { urlJoin } from 'url-join-ts';

@Injectable()
export class ProductService implements IProductService {
  async create(productData: any): Promise<any> {
    const url = urlJoin(SHOPIFY.URL, 'products.json');

    // const shopifyApiUrl = 'https://nitzan-test2.myshopify.com/admin/api/2024-04';
    // const accessToken = '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';

    // const productData2 = {
    //   product: {
    //     title: "Dumbbells",
    //     body_html: "30kg dumbbells best quality black", // Use `body_html` for product description
    //     vendor: "Super sport equipment Inc",
    //     product_type: "dumbbell", // Use `product_type` instead of `type`
    //   }
    // };

    // try {
    //   const response = await axios.post(`${shopifyApiUrl}/products.json`, productData2, {
    //     headers: {
    //       'X-Shopify-Access-Token': accessToken,
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   console.log('Product created:', response.data);
    // } catch (error) {
    //   console.error('Error creating product:', error.response ? error.response.data : error.message);
    // }

    const response = await axios.post(url, { product: productData }, {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY.ACCESS_TOKEN,
      },
    });

    return response.data;
  }
}
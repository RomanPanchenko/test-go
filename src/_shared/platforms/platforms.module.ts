import { Module } from '@nestjs/common';
import {
  OrderService as ShopifyOrderService,
  ProductService as ShopifyProductService,
} from './shopify/services';

@Module({
  imports: [],
  controllers: [],
  providers: [
    ShopifyOrderService,
    ShopifyProductService,
  ],
  exports: [],
})
export class PlatformsModule {}

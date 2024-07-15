import { Module } from '@nestjs/common';
import { OrderService, ProductService } from './shopify/services';

@Module({
  imports: [],
  controllers: [],
  providers: [
    OrderService,
    ProductService,
  ],
  exports: [],
})
export class PlatformsModule {}

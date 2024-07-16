import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { OrderController, OrdersController } from './order/controllers';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/controllers';
import { PlatformsModule } from './_shared/platforms/platforms.module';

@Module({
  imports: [
    OrderModule,
    ProductModule,
    PlatformsModule,
  ],
  controllers: [
    OrderController,
    OrdersController,
    ProductController,
  ],
  providers: [],
})
export class AppModule {}

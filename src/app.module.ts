import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { OrderController, OrdersController } from './order/controllers';
import { OrderProvider } from './order/providers';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/controllers';
import { ProductProvider } from './product/providers';

@Module({
  imports: [
    OrderModule,
    ProductModule,
  ],
  controllers: [
    OrderController,
    OrdersController,
    ProductController,
  ],
  providers: [
    OrderProvider,
    ProductProvider,
  ],
})
export class AppModule {}

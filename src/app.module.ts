import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { OrderController, OrdersController } from './order/controllers';
import { OrderProvider } from './order/providers';

@Module({
  imports: [OrderModule],
  controllers: [
    OrderController,
    OrdersController,
  ],
  providers: [
    OrderProvider,
  ],
})
export class AppModule {}

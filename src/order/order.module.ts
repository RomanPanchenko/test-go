import { Module } from '@nestjs/common';
import { OrderController, OrdersController } from './controllers';
import { OrderProvider } from './providers';

@Module({
  imports: [],
  controllers: [OrderController, OrdersController],
  providers: [
    OrderProvider,
  ],
})
export class OrderModule {}

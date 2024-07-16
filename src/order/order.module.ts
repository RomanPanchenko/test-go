import { Module } from '@nestjs/common';
import { OrderController, OrdersController } from './controllers';
import { OrderProvider } from './providers';
import { PlatformsModule } from '../_shared/platforms/platforms.module';

@Module({
  imports: [
    PlatformsModule,
  ],
  controllers: [
    OrderController,
    OrdersController,
  ],
  providers: [
    OrderProvider,
  ],
  exports: [
    OrderProvider,
  ],
})
export class OrderModule {}

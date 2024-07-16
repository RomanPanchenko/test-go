import { Module } from '@nestjs/common';
import { ProductController } from './controllers';
import { ProductProvider } from './providers';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductProvider,
  ],
})
export class ProductModule {}

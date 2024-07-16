import { Module } from '@nestjs/common';
import { ProductController } from './controllers';
import { ProductProvider } from './providers';
import { PlatformsModule } from '../_shared/platforms/platforms.module';

@Module({
  imports: [
    PlatformsModule,
  ],
  controllers: [
    ProductController,
  ],
  providers: [
    ProductProvider,
  ],
  exports: [
    ProductProvider,
  ],
})
export class ProductModule {}

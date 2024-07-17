import { Injectable } from '@nestjs/common';
import { PlatformNameEnum } from '../../_shared/platforms/types';
import { CreateProductRequestDto, ProductResponseDto } from '../../_shared/platforms/dtos';
import { PlatformProductProvider } from '../../_shared/platforms/providers';

@Injectable()
export class ProductProvider {
  constructor(
    private readonly platformProductProvider: PlatformProductProvider,
  ) {}

  async create(platformName: PlatformNameEnum, data: CreateProductRequestDto): Promise<ProductResponseDto> {
    const product = await this.platformProductProvider.create(platformName, data);

    return product;
  }
}
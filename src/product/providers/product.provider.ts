import stringify from 'fast-safe-stringify';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PlatformNameEnum } from '../../_shared/platforms/types';
import { CreateProductRequestDto, OrderResponseDto, ProductResponseDto } from '../../_shared/platforms/dtos';
import { PlatformProductProvider } from '../../_shared/platforms/providers';

@Injectable()
export class ProductProvider {
  constructor(
    private readonly platformProductProvider: PlatformProductProvider,
  ) {}

  async create(platformName: PlatformNameEnum, data: CreateProductRequestDto): Promise<ProductResponseDto> {
    let product: OrderResponseDto;
    try {
      product = await this.platformProductProvider.create(platformName, data);
    } catch (e) {
      let message = 'Error creating product: ';
      if (e.response?.data) {
        message += stringify(e.response.data);
      } else {
        message += e.message;
      }

      Logger.error(message);
      throw new HttpException(message, e.response?.status);
    }

    return product;
  }
}
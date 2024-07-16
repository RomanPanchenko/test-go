import { Injectable } from '@nestjs/common';
import { ProductResponseDto } from '../../../../product/dtos';
import { IProductMapper } from '../../types';

@Injectable()
export class ProductMapper implements IProductMapper {
  async toDto(): Promise<ProductResponseDto> {
    return {} as ProductResponseDto;
  }
}
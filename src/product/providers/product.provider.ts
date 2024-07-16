import { Injectable } from '@nestjs/common';
import { PlatformNameEnum } from '../../_common/types';
import { CreateProductRequestDto, ProductResponseDto } from '../dtos';

@Injectable()
export class ProductProvider {
  constructor() {}

  async create(platformName: PlatformNameEnum, data: CreateProductRequestDto): Promise<ProductResponseDto> {

    return {} as ProductResponseDto;
  }
}
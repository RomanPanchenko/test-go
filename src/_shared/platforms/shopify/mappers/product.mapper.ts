import { Injectable } from '@nestjs/common';
import { IProductMapper } from '../../types';
import { CreateProductRequestDto, ProductResponseDto } from '../../dtos';

@Injectable()
export class ProductMapper implements IProductMapper {
  async toResponseDto(productResponse: any): Promise<ProductResponseDto> {
    // TODO: Implement conversion of RequestDto to a platform specific request body
    return productResponse as ProductResponseDto;
  }

  async toPlatformSpecificRequestObject(dto: CreateProductRequestDto): Promise<any> {
    // TODO: Implement conversion of platform specific response body to a common response dto
    return dto as any;
  }
}
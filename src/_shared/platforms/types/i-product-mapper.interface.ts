import { CreateProductRequestDto, ProductResponseDto } from '../dtos';

export interface IProductMapper {
  toResponseDto(productResponse: any): Promise<ProductResponseDto>;
  toPlatformSpecificRequestObject(dto: CreateProductRequestDto): Promise<any>;
}
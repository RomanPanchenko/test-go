import { CreateProductRequestDto, ProductResponseDto } from '../dtos';

export interface IProductProvider {
  create(platform: string, createProductRequestDto: CreateProductRequestDto): Promise<ProductResponseDto>;
}
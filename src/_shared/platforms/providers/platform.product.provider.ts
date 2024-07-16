import { Injectable } from '@nestjs/common';
import { CreateProductRequestDto, OrderResponseDto, ProductResponseDto } from '../dtos';

// Shopify
import { ProductService as ShopifyProductService } from '../shopify/services';
import { ProductMapper as ShopifyProductMapper } from '../shopify/mappers';

// Salesforce
import { ProductService as SalesforceProductService } from '../salesforce/services';
import { ProductMapper as SalesforceProductMapper } from '../salesforce/mappers';
import { IProductMapper, IProductProvider, IProductService } from '../types';

@Injectable()
export class PlatformProductProvider implements IProductProvider {
  constructor(
    // Shopify
    private readonly shopifyProductService: ShopifyProductService,
    private readonly shopifyProductMapper: ShopifyProductMapper,
    // Salesforce
    private readonly salesforceProductService: SalesforceProductService,
    private readonly salesforceProductMapper: SalesforceProductMapper,
  ) {}

  async create(platform: string, createProductRequestDto: CreateProductRequestDto): Promise<ProductResponseDto> {
    const productService = this[`${platform}ProductService`] as IProductService;
    const productMapper = this[`${platform}ProductMapper`] as IProductMapper;

    const platformSpecificRequestObject = await productMapper.toPlatformSpecificRequestObject(createProductRequestDto);
    const rawProduct = await productService.create(platformSpecificRequestObject);
    const productResponseDto = await productMapper.toResponseDto(rawProduct);

    return productResponseDto;
  }
}
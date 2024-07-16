import { Injectable } from '@nestjs/common';
import { OrderResponseDto } from '../dtos';
import { PlatformNameEnum } from '../types';
import { OrderService as ShopifyOrderService } from '../shopify/services';

@Injectable()
export class OrderProvider {
  constructor(
    private readonly shopifyOrderService: ShopifyOrderService,
  ) {}

  async getOrderById(platformName: PlatformNameEnum, orderId: number | string): Promise<OrderResponseDto> {

    return {} as OrderResponseDto;
  }

  async getOrders(platformName: PlatformNameEnum): Promise<OrderResponseDto[]> {

    return [] as OrderResponseDto[];
  }
}
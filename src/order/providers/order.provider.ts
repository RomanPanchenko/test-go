import { Injectable } from '@nestjs/common';
import { OrderRequest } from '../types';
import { PlatformOrderProvider } from '../../_shared/platforms/providers';
import { PlatformNameEnum } from '../../_shared/platforms/types';
import { OrderResponseDto, OrdersResponseDto } from '../../_shared/platforms/dtos';

@Injectable()
export class OrderProvider {
  constructor(
    private readonly platformOrderProvider: PlatformOrderProvider,
  ) {}

  async getOrderById(orderRequestDto: OrderRequest): Promise<OrderResponseDto> {
    const order = await this.platformOrderProvider.getOrderById(orderRequestDto);

    return order;
  }

  async getOrders(platform: string): Promise<OrdersResponseDto> {
    const orders = await this.platformOrderProvider.getOrders(platform as PlatformNameEnum);

    return orders;
  }
}
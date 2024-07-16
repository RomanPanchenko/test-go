import { Injectable, Logger } from '@nestjs/common';
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
    let order: OrderResponseDto;
    try {
      order = await this.platformOrderProvider.getOrderById(orderRequestDto);
    } catch (e) {
      Logger.error(e);
      throw e;
    }

    return order;
  }

  async getOrders(platform: string): Promise<OrdersResponseDto> {
    let orders: OrdersResponseDto;
    try {
      orders = await this.platformOrderProvider.getOrders(platform as PlatformNameEnum);
    } catch (e) {
      Logger.error(e);
    }

    return orders;
  }
}
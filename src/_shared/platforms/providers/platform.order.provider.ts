import { Injectable } from '@nestjs/common';
import { OrderResponseDto, OrdersResponseDto } from '../dtos';
import { IOrderMapper, IOrderProvider, IOrderService, PlatformNameEnum } from '../types';
import { OrderRequest } from '../../../order/types';

// Shopify
import { OrderService as ShopifyOrderService } from '../shopify/services';
import { OrderMapper as ShopifyOrderMapper } from '../shopify/mappers';

// Salesforce
import { OrderService as SalesforceOrderService } from '../salesforce/services';
import { OrderMapper as SalesforceOrderMapper } from '../salesforce/mappers';


@Injectable()
export class PlatformOrderProvider implements IOrderProvider {
  constructor(
    // Shopify
    private readonly shopifyOrderService: ShopifyOrderService,
    private readonly shopifyOrderMapper: ShopifyOrderMapper,
    // Salesforce
    private readonly salesforceOrderService: SalesforceOrderService,
    private readonly salesforceOrderMapper: SalesforceOrderMapper,
  ) {}

  async getOrderById(orderRequestDto: OrderRequest): Promise<OrderResponseDto> {
    const orderService = this[`${orderRequestDto.platform}OrderService`] as IOrderService;
    const orderMapper = this[`${orderRequestDto.platform}OrderMapper`] as IOrderMapper;

    const rawOrder = await orderService.getOrderById(orderRequestDto.id);
    const orderResponseDto = await orderMapper.toResponseDto(rawOrder);

    return orderResponseDto;
  }

  async getOrders(platform: PlatformNameEnum): Promise<OrdersResponseDto> {
    const orderService = this[`${platform}OrderService`] as IOrderService;
    const orderMapper = this[`${platform}OrderMapper`] as IOrderMapper;

    const ordersResponseDto: OrdersResponseDto = { orders: [] };
    const rawOrders = await orderService.getOrders();
    if (!Array.isArray(rawOrders?.orders)) {
      return ordersResponseDto;
    }
    for (let i = 0; i < rawOrders.orders.length; i++) {
      const orderResponseDto = await orderMapper.toResponseDto(rawOrders.orders[i]);
      ordersResponseDto.orders.push(orderResponseDto);
    }

    return ordersResponseDto;
  }
}
import { OrderRequest } from '../../../order/types';
import { OrderResponseDto, OrdersResponseDto } from '../dtos';
import { PlatformNameEnum } from './platform-name.enum';

export interface IOrderProvider {
  getOrderById(orderRequestDto: OrderRequest): Promise<OrderResponseDto>;
  getOrders(platform: PlatformNameEnum): Promise<OrdersResponseDto>;
}
import { Injectable } from '@nestjs/common';
import { PlatformNameEnum } from '../../_common/types';
import { OrderResponseDto } from '../dtos';

@Injectable()
export class OrderProvider {
  constructor() {}

  async getOrderById(platformName: PlatformNameEnum, orderId: number | string): Promise<OrderResponseDto> {

    return {} as OrderResponseDto;
  }

  async getOrders(platformName: PlatformNameEnum): Promise<OrderResponseDto[]> {

    return [] as OrderResponseDto[];
  }
}
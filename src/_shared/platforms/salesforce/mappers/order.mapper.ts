import { Injectable } from '@nestjs/common';
import { OrderResponseDto } from '../../../../order/dtos';

@Injectable()
export class OrderMapper {
  async toDto():Promise<OrderResponseDto> {

  }
}
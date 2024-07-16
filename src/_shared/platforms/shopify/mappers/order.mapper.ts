import { Injectable } from '@nestjs/common';
import { IOrderMapper } from '../../types';
import { OrderResponseDto } from '../../dtos';

@Injectable()
export class OrderMapper implements IOrderMapper {
  async toResponseDto(orderResponse: any): Promise<OrderResponseDto> {
    // TODO: Need to map to some certain DTO
    return orderResponse as OrderResponseDto;
  }
}
import { Injectable } from '@nestjs/common';
import { IOrderMapperService } from '../../types';
import { OrderResponseDto } from '../../dtos';

@Injectable()
export class OrderMapper implements IOrderMapperService {
  async toDto(): Promise<OrderResponseDto> {
    return {} as OrderResponseDto;
  }
}
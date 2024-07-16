import { OrderResponseDto } from '../dtos';

export interface IOrderMapper {
  toResponseDto(orderResponse: any): Promise<OrderResponseDto>;
}
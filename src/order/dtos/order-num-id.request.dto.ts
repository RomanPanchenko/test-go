import { IsEnum, IsPositive, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PlatformNameEnum } from '../../_common/types';
import { OrderRequest } from '../types';

export class OrderNumIdRequestDto {
  constructor(dto: OrderRequest) {
    this.platform = dto.platform as PlatformNameEnum;
    if (dto.id) {
      this.id = Number(dto.id);
    }
  }

  @IsEnum(PlatformNameEnum)
  @ApiProperty({ type: String, description: 'Platform name. Allowed values ("shopify")', required: true })
  platform: PlatformNameEnum;

  @IsPositive()
  @Max(9999)
  @ApiProperty({ type: Number, description: 'Order id' })
  id: number;
}
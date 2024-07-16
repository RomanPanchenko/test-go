import { IsEnum, IsInt, IsPositive, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderRequest } from '../types';
import { PlatformNameEnum } from '../../_shared/platforms/types';

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
  @IsInt()
  @Max(Number.MAX_SAFE_INTEGER)
  @ApiProperty({ type: Number, description: 'Order id' })
  id: number;
}
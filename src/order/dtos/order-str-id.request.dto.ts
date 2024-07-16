import { IsEnum, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderRequest } from '../types';
import { PlatformNameEnum } from '../../_shared/platforms/types';

export class OrderStrIdRequestDto {
  constructor(dto: OrderRequest) {
    this.platform = dto.platform as PlatformNameEnum;
    if (dto.id) {
      this.id = String(dto.id);
    }
  }

  @IsEnum(PlatformNameEnum)
  @ApiProperty({ type: String, description: 'Platform name. Allowed values ("shopify")', required: true })
  platform: PlatformNameEnum;

  @IsString()
  @MinLength(3)
  @ApiProperty({ type: String, description: 'Order id' })
  id: string;
}
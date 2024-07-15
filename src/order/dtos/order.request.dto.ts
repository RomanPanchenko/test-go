import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PlatformNameEnum } from '../../_common/types';

export class OrderStrIdRequestDto {
  @IsEnum(PlatformNameEnum)
  @ApiProperty({ type: String, description: 'Platform name. Allowed values ("shopify")', required: true })
  platform: PlatformNameEnum;

  id:string;
}
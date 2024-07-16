import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PlatformNameEnum } from '../types';

export class PlatformRequestDto {
  @IsEnum(PlatformNameEnum)
  @ApiProperty({ type: String, description: 'Platform name. Allowed values ("shopify")', required: true })
  platform: PlatformNameEnum;
}
import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductRequestDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({ type: String, description: 'Product title' })
  title: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Product description' })
  description: string;

  @IsString()
  @MinLength(3)
  @ApiProperty({ type: String, description: 'Product vendor' })
  vendor: string;

  @IsString()
  @MinLength(3)
  @ApiProperty({ type: String, description: 'Product type' })
  type: string;
}
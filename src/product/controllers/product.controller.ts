import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateProductRequestDto, ProductResponseDto } from '../dtos';
import { ProductProvider } from '../providers';
import { PlatformRequestDto } from '../../_shared/platforms/dtos/platform.request.dto';

@Controller('order')
@ApiTags('order')
export class ProductController {
  constructor(
    private readonly productProvider: ProductProvider,
  ) {}

  @Post('/:platform')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Create product. Response: ProductResponseDto object.' })
  @ApiBadRequestResponse({ description: 'Error creating product.' })
  @ApiParam({ name: 'platform', type: String, description: 'Platform name' })
  @ApiBody({ type: CreateProductRequestDto })
  async create(
    @Param() platformRequestDto: PlatformRequestDto,
    @Body() createProductRequestDto: CreateProductRequestDto,
  ): Promise<ProductResponseDto> {
    return await this.productProvider.create(platformRequestDto.platform, createProductRequestDto);
  }
}

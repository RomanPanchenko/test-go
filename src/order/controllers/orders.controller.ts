import { Controller, Get, HttpCode, Param, UsePipes } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { OrderResponseDto, OrderStrIdRequestDto } from '../dtos';
import { OrderProvider } from '../providers';
import { OrderValidationPipe } from '../pipes';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(
    private readonly orderProvider: OrderProvider,
  ) {}

  @Get('/:platform')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Get orders. Response: OrderResponseDto[] object.' })
  @ApiBadRequestResponse({ description: 'Error getting orders.' })
  @ApiParam({ name: 'platform', type: String, description: 'Platform name' })
  @UsePipes(OrderValidationPipe)
  async getOrders(
    @Param() orderRequestDto: OrderStrIdRequestDto,
  ): Promise<OrderResponseDto> {
    return await this.orderProvider.getOrders(orderRequestDto.platform);
  }
}

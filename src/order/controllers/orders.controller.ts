import { Controller, Get, HttpCode, Param, UsePipes } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { OrderResponseDto, OrderStrIdRequestDto } from '../dtos';
import { OrderProvider } from '../providers';
import { OrderIdValidationPipe, PlatformValidationPipe } from '../pipes';
import { RouteWithPlatformParam } from '../types';

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
  @UsePipes(PlatformValidationPipe)
  async getOrders(
    @Param() routeWithPlatformParam: RouteWithPlatformParam,
  ): Promise<OrderResponseDto> {
    return await this.orderProvider.getOrders(routeWithPlatformParam.platform);
  }
}

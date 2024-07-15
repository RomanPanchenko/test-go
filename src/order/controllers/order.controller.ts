import { Controller, Get, HttpCode, Param, UsePipes } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { OrderResponseDto, OrderStrIdRequestDto } from '../dtos';
import { OrderProvider } from '../providers';
import { OrderValidationPipe } from '../pipes';
import { OrderNumIdRequestDto } from '../dtos/order-num-id.request.dto';

@Controller('order')
@ApiTags('order')
export class OrderController {
  constructor(
    private readonly orderProvider: OrderProvider,
  ) {}

  @Get('/:platform/:id')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Get order data. Response: OrderResponseDto object.' })
  @ApiBadRequestResponse({ description: 'Error getting order data.' })
  @ApiParam({ name: 'platform', type: String, description: 'Platform name' })
  @ApiParam({ name: 'id', type: String, description: 'Order id' })
  @UsePipes(OrderValidationPipe)
  async getOrderById(
    @Param() orderRequestDto: OrderNumIdRequestDto | OrderStrIdRequestDto,
  ): Promise<OrderResponseDto> {
    return await this.orderProvider.getOrderById(orderRequestDto.platform, orderRequestDto.id);
  }
}

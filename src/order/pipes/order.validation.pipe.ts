import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { OrderNumIdRequestDto } from '../dtos/order-num-id.request.dto';
import { StringOrderIdRequestDto } from '../../../dist/order/dtos/string-order-id.request.dto';
import { OrderRequest } from '../types';
import { ValidationException } from '../../_common/exceptions';

const platformToDto = {
  shopify: OrderNumIdRequestDto,
  another: StringOrderIdRequestDto,
};

@Injectable()
export class OrderValidationPipe implements PipeTransform {
  async transform(value: OrderRequest, metadata: ArgumentMetadata) {
    let dto;
    if (!(value.platform in platformToDto)) {
      throw new HttpException(`Unsupported platform: ${value.platform}`, HttpStatus.BAD_REQUEST);
    }

    const dtoClass = platformToDto[value.platform];
    const dtoInstance: object = new dtoClass(value);
    const errors = await validate(dtoInstance);
    if (errors.length > 0) {
      throw new ValidationException(errors);
    }

    return dtoInstance;
  }
}

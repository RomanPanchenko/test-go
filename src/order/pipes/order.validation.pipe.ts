import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { OrderRequest } from '../types';
import { ValidationException } from '../../_common/exceptions';
import { OrderNumIdRequestDto, OrderStrIdRequestDto } from '../dtos';

const platformToDto = {
  shopify: OrderNumIdRequestDto,
  another: OrderStrIdRequestDto,
};

@Injectable()
export class OrderValidationPipe implements PipeTransform {
  async transform(value: OrderRequest, metadata: ArgumentMetadata) {
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

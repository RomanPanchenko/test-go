import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { validate } from 'class-validator';
import { OrderRequest } from '../types';
import { ValidationException } from '../../_common/exceptions';
import { OrderNumIdRequestDto, OrderStrIdRequestDto } from '../dtos';

const platformToDto = {
  shopify: OrderNumIdRequestDto,
  salesforce: OrderStrIdRequestDto,
};

@Injectable()
export class OrderIdValidationPipe implements PipeTransform {
  async transform(value: OrderRequest, metadata: ArgumentMetadata) {
    const dtoClass = platformToDto[value.platform];
    const dtoInstance: object = new dtoClass(value);
    const errors = await validate(dtoInstance);
    if (errors.length > 0) {
      throw new ValidationException(errors);
    }

    return dtoInstance;
  }
}

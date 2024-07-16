import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { OrderRequest, RouteWithPlatformParam } from '../types';

const platformToDto = {
  shopify: true,
  salesforce: true,
};

@Injectable()
export class PlatformValidationPipe implements PipeTransform {
  async transform(value: RouteWithPlatformParam, metadata: ArgumentMetadata) {
    if (!(value.platform in platformToDto)) {
      throw new HttpException(`Unsupported platform: ${value.platform}`, HttpStatus.BAD_REQUEST);
    }

    return value;
  }
}

import { Injectable, NotImplementedException } from '@nestjs/common';
import { IProductService } from '../../types';

@Injectable()
export class ProductService implements IProductService {
  async create(productData: any): Promise<any> {
    throw new NotImplementedException();
  }
}
import { Injectable } from '@nestjs/common';
import { IProductService } from '../../types';

@Injectable()
export class ProductService implements IProductService {
  async create(): Promise<any> {

  }
}
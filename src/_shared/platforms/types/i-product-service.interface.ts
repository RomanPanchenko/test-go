export interface IProductService {
  create(platformSpecificRequestObject: any): Promise<any>;
}
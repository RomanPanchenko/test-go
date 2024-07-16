export interface IProductMapper {
  toDto(): Promise<any>;
}
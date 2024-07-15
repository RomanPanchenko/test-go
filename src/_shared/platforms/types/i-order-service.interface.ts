export interface IOrderService {
  getOrderById(id: string | number): Promise<any>;
  getOrders():Promise<any>,
}
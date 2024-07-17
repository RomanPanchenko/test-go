import axios from 'axios';
import { OrderService } from './order.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { SHOPIFY } from './constants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const requestOptions = {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': SHOPIFY.ACCESS_TOKEN,
  },
};

describe('OrderService', () => {
  let orderService: OrderService;

  beforeEach(() => {
    orderService = new OrderService();
  });

  describe('getOrderById', () => {
    it('should return order data for valid id', async () => {
      const orderId = 12345;
      const mockResponse = { data: { order: { id: orderId } } };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await orderService.getOrderById(orderId);

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://some-store.myshopify.com/admin/api/2024-04/orders/12345.json',
        requestOptions
      );
    });

    it('should throw an HttpException when an error occurs', async () => {
      const orderId = 12345;
      const mockError = {
        response: {
          status: HttpStatus.NOT_FOUND,
          data: { message: 'Not Found' },
        },
        message: 'Error message',
      };
      mockedAxios.get.mockRejectedValueOnce(mockError);

      await expect(orderService.getOrderById(orderId)).rejects.toThrow(HttpException);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://some-store.myshopify.com/admin/api/2024-04/orders/12345.json',
        requestOptions
      );
    });
  });

  describe('getOrders', () => {
    it('should return orders data', async () => {
      const mockResponse = { data: { orders: [] } };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await orderService.getOrders();

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://some-store.myshopify.com/admin/api/2024-04/orders.json?status=any',
        requestOptions
      );
    });

    it('should throw an HttpException when an error occurs', async () => {
      const mockError = {
        response: {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          data: { message: 'Internal Server Error' },
        },
        message: 'Error message',
      };
      mockedAxios.get.mockRejectedValueOnce(mockError);

      await expect(orderService.getOrders()).rejects.toThrow(HttpException);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://some-store.myshopify.com/admin/api/2024-04/orders.json?status=any',
        requestOptions
      );
    });
  });
});

import { Module } from '@nestjs/common';

// Common interface
import {
  PlatformOrderProvider,
  PlatformProductProvider,
} from './providers';

// Shopify
import {
  OrderService as ShopifyOrderService,
  ProductService as ShopifyProductService,
} from './shopify/services';
import {
  OrderMapper as ShopifyOrderMapper,
  ProductMapper as ShopifyProductMapper,
} from './shopify/mappers';
// Salesforce
import {
  OrderService as SalesforceOrderService,
  ProductService as SalesforceProductService,
} from './salesforce/services';
import {
  OrderMapper as SalesforceOrderMapper,
  ProductMapper as SalesforceProductMapper,
} from './salesforce/mappers';

@Module({
  imports: [],
  controllers: [],
  providers: [
    // Common interface
    PlatformOrderProvider,
    PlatformProductProvider,

    // Shopify
    ShopifyOrderService,
    ShopifyProductService,
    ShopifyOrderMapper,
    ShopifyProductMapper,

    // Salesforce
    SalesforceOrderService,
    SalesforceProductService,
    SalesforceOrderMapper,
    SalesforceProductMapper,

  ],
  exports: [
    // Common interface
    PlatformOrderProvider,
    PlatformProductProvider,

    // Shopify
    ShopifyOrderService,
    ShopifyProductService,
    ShopifyOrderMapper,
    ShopifyProductMapper,

    // Salesforce
    SalesforceOrderService,
    SalesforceProductService,
    SalesforceOrderMapper,
    SalesforceProductMapper,
  ],
})
export class PlatformsModule {}

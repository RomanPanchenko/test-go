import * as config from 'config';

const store = config.get('platforms.shopify.store');
const api_key = config.get('platforms.shopify.api_key');
const password = config.get('platforms.shopify.password');
const api_version = config.get('platforms.shopify.api_version');

export const SHOPIFY = {
  STORE: store,
  API_KEY: api_key,
  API_VERSION: api_version,
  PASSWORD: password,
  URL: `https://${store}.myshopify.com/admin/api/${api_version}`,
};


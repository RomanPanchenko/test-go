import * as config from 'config';

const store = config.get('platforms.shopify.store');
const api_key = config.get('platforms.shopify.api_key');
const access_token = config.get('platforms.shopify.access_token');
const api_version = config.get('platforms.shopify.api_version');

export const SHOPIFY = {
  STORE: store,
  API_KEY: api_key,
  API_VERSION: api_version,
  ACCESS_TOKEN: access_token,
  URL: `https://${store}.myshopify.com/admin/api/${api_version}`,
};


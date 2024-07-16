module.exports = {
  env: process.env.NODE_ENV,
  port: 3000,
  host: 'localhost',
  protocol: 'http',
  api_global_prefix: '/',
  platforms: {
    shopify: {
      api_version: '2024-04',
      store: '',
      api_key: '',
      access_token: '',
    },
    salesforce: {},
  },
};
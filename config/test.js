module.exports = {
  env: 'test',
  port: 3000,
  host: 'localhost',
  protocol: 'http',
  api_global_prefix: '/',
  platforms: {
    shopify: {
      api_version: '2024-04',
      store: 'some-store',
      api_key: '11111111112222222222333333333',
      access_token: 'shpca_163grt6thisismyfakehellofakekey',
    },
    salesforce: {},
  },
};
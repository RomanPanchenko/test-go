module.exports = {
  env: process.env.NODE_ENV,
  port: 3000,
  host: 'localhost',
  protocol: 'http',
  api_global_prefix: '/',
  platforms: {
    shopify: {
      store: '',
      api_key: '',
      password: '',
      api_version: '',
    },
    salesforce: {},
  },
};
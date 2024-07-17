import * as config from 'config';

// Config values for salesforce can be any
// We will use them in services in the same folder
const store = config.get('platforms.salesforce.store');
const api_key = config.get('platforms.salesforce.api_key');
const access_token = config.get('platforms.salesforce.access_token');
const api_version = config.get('platforms.salesforce.api_version');

// Fake values & structure for now
export const SALESFORCE = {
  STORE: store,
  API_KEY: api_key,
  API_VERSION: api_version,
  ACCESS_TOKEN: access_token,
  URL: `https://${store}.mysalesforce.com/admin/api/${api_version}`,
};


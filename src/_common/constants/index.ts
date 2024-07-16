import * as config from 'config';

export const IS_PRODUCTION = config.get('env') === 'production';
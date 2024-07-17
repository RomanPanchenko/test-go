import { urlJoin } from 'url-join-ts';

const modifiedUrlJoin = (baseUrl: string | undefined, ...paths: any[]): string => {
  let result = urlJoin(baseUrl, ...paths);
  return result.replace(/\/\?/g, '?');
};

export { modifiedUrlJoin as urlJoin };
/* eslint-disable import/no-anonymous-default-export */
import { createClient } from 'contentful';

export default ({ space, accessToken, environment, host }) => {
  return host
    ? createClient({ space, accessToken, environment, host })
    : createClient({ space, accessToken, environment });
};

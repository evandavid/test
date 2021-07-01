/* eslint-disable import/no-anonymous-default-export */
import { createClient } from 'contentful';

const contentfulClient = ({ space, accessToken, environment, host }) => {
  return host
    ? createClient({ space, accessToken, environment, host })
    : createClient({ space, accessToken, environment });
};

export default contentfulClient;

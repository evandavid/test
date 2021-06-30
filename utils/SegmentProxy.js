let enabled;
let writeKey;
let loaded;

const mainObj = {};

const proxyGetter = (target, name) => {
  return (...args) => {
    const type = loaded ? typeof window.analytics[name] : null;

    // here we can debug analytics calls

    if (loaded && enabled && type === 'function') {
      window.analytics[name](...args);
    }
  };
};

// Proxy is NOT working in node v4
//
// // Proxy objects cannot be exported as default because module loader is using default property we are overriding
// export const segment = new Proxy(mainObj, {
//   get: proxyGetter
// });

// replacement for Proxy

const methods = [
  'trackSubmit',
  'trackClick',
  'trackLink',
  'trackForm',
  'pageview',
  'identify',
  'reset',
  'group',
  'track',
  'ready',
  'alias',
  'page',
  'once',
  'off',
  'on',
  'load',
];

export const segment = {};

methods.forEach(method => {
  segment[method] = proxyGetter(mainObj, method);
});

export function setup(config) {
  enabled = config.clientConfig.segment.enabled;
  writeKey = config.clientConfig.segment.writeKey;

  if (enabled && typeof window !== 'undefined') {
    require('./segment');
  }

  loaded =
    typeof window !== 'undefined' && typeof window.analytics !== 'undefined';

  if (enabled) {
    segment.load(writeKey);
  }
}

if (!global.__SERVER__ || global.__CLIENT__) {
  require('match-media');
}

const screenSizes = {
  xs: 47.938,
  sm: 48, // 768px
  md: 64, // 1024px
  lg: 78.125, // 1250px
  xl: 120, // 1920px
};

export default {
  matches(screenSizeString) {
    if (typeof window === 'undefined') return null;

    const minWidth = screenSizes[screenSizeString];

    return window.matchMedia(`(min-width: ${minWidth}em)`).matches;
  },
};

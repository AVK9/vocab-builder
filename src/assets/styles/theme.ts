export const theme = Object.freeze({
  breakpoints: {
    mobile: '320px',
    mobileX: '425px',
    tablet: '768px',
    laptop: '1440px',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
  },
  spacing: (value: number) => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});

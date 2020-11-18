const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const min = {
  mobile: `screen and (min-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.tablet})`,
  desktop: `screen and (min-width: ${breakpoints.desktop})`,
};

export const devices = {
  mobile: `${min.mobile} and (max-width: ${breakpoints.tablet})`,
  tablet: `${min.tablet} and (max-width: ${breakpoints.desktop})`,
  desktop: min.desktop,
};

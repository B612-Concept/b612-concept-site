import { useMediaQuery } from '@react-hook/media-query';

const breakpoints = [
  ['mobile', '320px'],
  ['tabletSm', '500px'],
  ['tablet', '768px'],
  ['tabletLg', '1000px'],
  ['desktop', '1280px'],
];

/**
 * min-width queries for every breakpoint.
 *
 * e.g. mobile: '(min-width: 320px)'
 */
export const min = breakpoints.reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `(min-width: ${size})`,
  }),
  {}
);

/**
 * max-width queries for every breakpoint.
 *
 * e.g. tablet: '(max-width: 768px)'
 */
export const max = breakpoints.reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `(max-width: ${size})`,
  }),
  {}
);

/**
 * min-width and max-width queries for each device.
 *
 * e.g. mobile: '(min-width: 320px) and (max-width: 768px)'
 */
export const devices = breakpoints.reduce((acc, [name, size], i) => {
  const [nextName, nextSize] = breakpoints[i + 1] || [];

  const minQuery = min[name];
  const maxQuery = nextName ? `and ${max[nextName]}` : '';

  return { ...acc, [name]: `${minQuery} ${maxQuery}` };
}, {});

/**
 * Render children only if query media matches.
 */
export const Responsive = ({ query, children }) => {
  const match = useMediaQuery(query);
  return match ? children : null;
};

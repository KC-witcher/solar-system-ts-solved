export const minBy = <T>(array: T[], cb: (input: T) => number | string) => {
  if (array.length == 0) {
    return undefined;
  }
  return array.reduce((prev, curr) => (cb(prev) <= cb(curr) ? prev : curr));
};

export function maxBy<T>(array: T[], cb: (input: T) => number | string) {
  if (array.length == 0) {
    return undefined;
  }
  return array.reduce((prev, curr) => (cb(prev) >= cb(curr) ? prev : curr));
}

// return the number of divisions
// ex: min:0, max:100, interval: 10 -> 11
export const getDivisionNum = (min, max, interval) => {
  const total = max - min;
  const tmp = total / interval;
  return total % interval === 0 ? tmp + 1 : Math.ceil(tmp) + 1;
};

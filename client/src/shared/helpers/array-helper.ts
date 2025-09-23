export const isInArray = <T>(array: T[], item: T) => array.includes(item);

export const toggleArrayItem = <T>(array: T[], item: T): T[] =>
  isInArray(array, item) ? array.filter((el) => el !== item) : [...array, item];

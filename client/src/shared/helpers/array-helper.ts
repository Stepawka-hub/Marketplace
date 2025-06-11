export const isInArray = <T>(array: T[], id: T) => array.includes(id);

export const toggleArrayItem = <T>(array: T[], item: T): T[] =>
  array.includes(item) ? array.filter((el) => el !== item) : [...array, item];

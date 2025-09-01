export const isInArray = <T>(array: T[], id: T) => array.includes(id);

// Todo: Подумать, как можно реализовать лучше
export const toggleArrayItem = <T>(array: T[], item: T): T[] =>
  array.includes(item) ? array.filter((el) => el !== item) : [...array, item];

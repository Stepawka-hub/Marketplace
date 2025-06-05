import { TSetState } from '@types';

export type CategoryMenuProps = {
  selectedCategory: string;
  categories: string[];
  onChange: TSetState<string>;
};

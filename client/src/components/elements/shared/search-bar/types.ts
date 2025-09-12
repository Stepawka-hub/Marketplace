import { ChangeEventHandler } from 'react';

export type TSearchBarProps = {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler;
}
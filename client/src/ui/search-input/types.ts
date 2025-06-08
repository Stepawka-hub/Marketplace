import { ChangeEventHandler } from 'react';

export type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler;
}

export type SearchIconWrapperProps = {
  active: boolean;
}
import { ChangeEvent } from 'react';

export type TSelectionActionsBarProps = {
  totalSelected: number;
  isAllSelected: boolean;
  onSelectAll: (e: ChangeEvent<HTMLInputElement>) => void;
  onDeleteAll: () => void;
};

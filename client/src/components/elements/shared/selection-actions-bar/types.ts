export type TSelectionActionsBarProps = {
  totalSelected: number;
  isAllSelected: boolean;
  disabled?: boolean;
  onSelectAll: () => void;
  onDeleteAll: () => void;
};

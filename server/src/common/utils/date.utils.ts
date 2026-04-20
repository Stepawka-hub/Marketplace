import { TransformFnParams } from 'class-transformer';

export const toUTCDate = ({ value }: TransformFnParams): Date | null => {
  if (!value) {
    return null;
  }

  if (
    typeof value !== 'string' &&
    !(value instanceof Date) &&
    typeof value !== 'number'
  ) {
    return null;
  }

  const date = new Date(value);

  if (
    typeof value === 'string' &&
    !value.includes('Z') &&
    !value.includes('+')
  ) {
    return new Date(`${value}Z`);
  }

  return isNaN(date.getTime()) ? null : date;
};

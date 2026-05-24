import { ValueTransformer } from 'typeorm';

export const decimalToNumber: ValueTransformer = {
  to: (value: number): number => value,
  from: (value: string): number => parseFloat(value),
};

export const includesRow = (searchQuery: string, rows: string[]) => {
  const query = searchQuery.toLowerCase();
  return rows.some((r) => r.toLowerCase().includes(query));
};

export const checkInRange = (value: number, max: number, min: number) =>
  value <= max && value >= min;

export const includesRow = (searchQuery: string, rows: string[]) => {
  const query = searchQuery.toLowerCase();
  return rows.some((r) => r.toLowerCase().includes(query));
}

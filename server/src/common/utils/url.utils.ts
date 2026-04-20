export const formatMediaUrl = (
  filename: string | null,
  baseUrl: string,
  fallback?: string,
): string => {
  if (!filename) return fallback || '';

  return `${baseUrl}${filename}`;
};

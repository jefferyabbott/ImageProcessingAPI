export function validateQueryString(
  filename: string,
  width: number,
  height: number
): string[] {
  let incompleteQuery = [];

  if (!filename) {
    incompleteQuery.push('filename is required');
  }
  if (!height || height <= 0) {
    incompleteQuery.push('height is required');
  }
  if (!width || width <= 0) {
    incompleteQuery.push('width is required');
  }

  return incompleteQuery;
}

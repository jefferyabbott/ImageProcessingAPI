export function validateQueryString(
  filename: string,
  width: number,
  height: number
): string[] {
  let incompleteQuery: string[] = [];

  if (!filename) {
    incompleteQuery.push('filename is required');
  }
  if (height === undefined) {
    incompleteQuery.push('height is required');
  }
  if (width === undefined) {
    incompleteQuery.push('width is required');
  }

  return incompleteQuery;
}

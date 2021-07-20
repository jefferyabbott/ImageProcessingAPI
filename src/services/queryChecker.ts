export function validateQueryString(
  filename: string,
  height: unknown,
  width: unknown
): string[] {
  let incompleteQuery: string[] = [];

  // check filename
  if (!filename) {
    incompleteQuery.push('filename is required');
  }

  // check height value
  if (!height) {
    incompleteQuery.push('height is required');
  } else if (isNaN(height as number)) {
    incompleteQuery.push('height must be a number');
  } else if (height as number <= 0) {
    incompleteQuery.push('height must be greater than zero')
  }

  // check width value
  if (!width) {
    incompleteQuery.push('width is required');
  } else if (isNaN(width as number)) {
    incompleteQuery.push('width must be a number');
  } else if (width as number <= 0) {
    incompleteQuery.push('width must be greater than zero')
  }

  return incompleteQuery;
}

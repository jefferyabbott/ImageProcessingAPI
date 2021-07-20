import { checkIfFileExists } from '../services/fileOperations';

const type = 'full';

describe('File Operations', () => {
  it('should find a file named santamonica.jpg', () => {
    const filename = 'santamonica.jpg';
    expect(checkIfFileExists(filename, type)).toEqual(true);
  });

  it('should not find a file named santamonica.png', () => {
    const filename = 'santamonica.png';
    expect(checkIfFileExists(filename, type)).toEqual(false);
  });
});

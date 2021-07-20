import { checkIfFileExists } from '../services/fileOperations';
import { imageType } from '../models/imageType';

describe('File Operations', () => {
  it('should find a file named santamonica.jpg', () => {
    const filename = 'santamonica.jpg';
    const type = imageType.FULL;
    expect(checkIfFileExists(filename, type)).toEqual(true);
  });

  it('should not find a file named santamonica.png', () => {
    const filename = 'santamonica.png';
    const type = imageType.FULL;
    expect(checkIfFileExists(filename, type)).toEqual(false);
  });
});

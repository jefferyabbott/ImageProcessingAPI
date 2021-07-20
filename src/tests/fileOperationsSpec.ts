import {
  checkIfFileExists,
  createThumbnailImage,
} from '../services/fileOperations';

const fs = require('fs');

const type = 'full';
const validFilename = 'santamonica.jpg';
const invalidFilename = 'santamonica.png';
const targetTestFilename = 'TEST-santamonica-10x10.jpg';
const targetPath = `assets/thumb/${targetTestFilename}`;

describe('File Operations', () => {
  it('should find a file named santamonica.jpg', () => {
    expect(checkIfFileExists(validFilename, type)).toEqual(true);
  });

  it('should not find a file named santamonica.png', () => {
    expect(checkIfFileExists(invalidFilename, type)).toEqual(false);
  });
});

describe('Create Thumbnail Image', () => {
  it('should return false if attempting to resize a missing file', async () => {
    expect(
      await createThumbnailImage(
        invalidFilename,
        'shouldnotexist.png',
        200,
        200
      )
    ).toEqual(false);
  });

  it('should return true upon resizing an image', async () => {
    expect(
      await createThumbnailImage(validFilename, targetTestFilename, 10, 10)
    ).toEqual(true);
  });

  // clean up test file
  afterAll(function () {
    fs.unlink(targetPath, (err: string) => {
      if (err) {
        console.error(err);
      }
    });
  });
});

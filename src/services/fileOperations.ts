const fs = require('fs');
const sharp = require('sharp');

function checkIfFileExists(filename: string, imageType: string): Boolean {
  try {
    if (fs.existsSync(`./assets/${imageType}/${filename}`)) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
  return false;
}

function createThumbnailImage(filename: string) {
  // do sharp operations here
}

export default { checkIfFileExists, createThumbnailImage };

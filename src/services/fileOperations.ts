const fs = require('fs');
const sharp = require('sharp');

export function checkIfFileExists(
  filename: string,
  imageType: string
): Boolean {
  try {
    if (fs.existsSync(`./assets/${imageType}/${filename}`)) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
  return false;
}

export function createThumbnailImage(filename: string): boolean {
  sharp(`./assets/full/${filename}`)
    .resize(200, 200)
    .toFile(`./assets/thumb/${filename}`, function (err: string) {
      console.log(err);
      return false;
    });
  return true;
}

// export default checkIfFileExists;

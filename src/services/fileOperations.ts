const fs = require('fs');
const sharp = require('sharp');

const fullImage = 'full';
const thumbnailImage = 'thumb';

export function checkIfFileExists(
  filename: string,
  imageType: string
): boolean {
  try {
    if (fs.existsSync(`./assets/${imageType}/${filename}`)) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
  return false;
}

export async function createThumbnailImage(
  filename: string,
  targetFilename: string,
  height: number,
  width: number
): Promise<boolean> {
  try {
    const sharped = await sharp(`assets/${fullImage}/${filename}`)
      .resize(height, width)
      .toFile(`assets/${thumbnailImage}/${targetFilename}`);
    if (sharped) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

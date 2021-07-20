const fs = require('fs');
const sharp = require('sharp');
import { imageType } from '../models/imageType';

export function checkIfFileExists(
  filename: string,
  imageType: imageType
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

export async function createThumbnailImage(filename: string): Promise<boolean> {
  const sharped = await sharp(`./assets/${imageType.FULL}/${filename}`)
    .resize(200, 200)
    .toFile(`./assets/${imageType.THUMB}/${filename}`);
  if (sharped) {
    return true;
  } else {
    return false;
  }
}

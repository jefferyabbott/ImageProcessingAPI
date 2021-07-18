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
  await sharp(`./assets/${imageType.FULL}/${filename}`)
    .resize(200, 200)
    .toFile(`./assets/${imageType.THUMB}/${filename}`, function (err: string) {
      if (err) {
        console.log(err);
        return false;
      }
    });
  return true;
}

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

export async function createThumbnailImage(
  filename: string,
  targetFilename: string,
  height: number,
  width: number
): Promise<boolean> {
  try {
    const sharped = await sharp(`./assets/${imageType.FULL}/${filename}`)
      .resize(height, width)
      .toFile(`./assets/${imageType.THUMB}/${targetFilename}`);
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

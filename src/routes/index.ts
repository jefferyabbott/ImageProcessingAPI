import express from 'express';
const routes = express.Router();
const path = require('path');
import {
  checkIfFileExists,
  createThumbnailImage,
} from '../services/fileOperations';
import { imageType } from '../models/imageType';
import { validateQueryString } from '../services/queryChecker';

routes.get('/images', async (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as string;
  const height = req.query.height as unknown as number;
  const width = req.query.width as unknown as number;

  // check if query string is missing required parameters
  const incompleteQuery = validateQueryString(filename, height, width);
  if (incompleteQuery.length !== 0) {
    return res.status(400).send(incompleteQuery.toString());
  }

  // check if full image exists
  if (!checkIfFileExists(filename, imageType.FULL)) {
    return res.status(404).send(`${filename} not found`);
  }

  // check if thumbnail image exists
  const thumbnailFilename = filename.slice(0, filename.lastIndexOf('.'));
  const thumbnailFileExtension = filename.slice(filename.lastIndexOf('.'));
  const targetFilename = `${thumbnailFilename}-${height}-${width}${thumbnailFileExtension}`;
  if (checkIfFileExists(targetFilename, imageType.THUMB)) {
    // return the image thumbnail
    return res
      .status(200)
      .sendFile(
        path.join(
          __dirname,
          `../../assets/${imageType.THUMB}/${targetFilename}`
        )
      );
  } else {
    const imageResized = await createThumbnailImage(filename, targetFilename);
    if (imageResized === false) {
      return res
        .status(500)
        .send(`${filename} thumbnail could not be created.`);
    } else {
      return res
        .status(200)
        .sendFile(
          path.join(
            __dirname,
            `../../assets/${imageType.THUMB}/${targetFilename}`
          )
        );
    }
  }
});

export default routes;

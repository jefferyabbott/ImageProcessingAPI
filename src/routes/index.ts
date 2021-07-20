import express from 'express';
const routes = express.Router();
const path = require('path');
import {
  checkIfFileExists,
  createThumbnailImage,
} from '../services/fileOperations';
import { validateQueryString } from '../services/queryChecker';
const fullImage = 'full';
const thumbnailImage = 'thumb';

routes.get('/images', async (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as string;
  const heightInput = req.query.height as unknown;
  const widthInput = req.query.width as unknown;

  // check if query string is missing required parameters
  const incompleteQuery = validateQueryString(
    filename,
    heightInput,
    widthInput
  );
  if (incompleteQuery.length !== 0) {
    return res.status(400).send(incompleteQuery.toString());
  }

  // convert unknown dimensions to numbers
  const height = Number(heightInput);
  const width = Number(widthInput);

  // check if full image exists
  if (!checkIfFileExists(filename, fullImage)) {
    return res.status(404).send(`${filename} not found`);
  }

  // check if thumbnail image exists
  const thumbnailFilename = filename.slice(0, filename.lastIndexOf('.'));
  const thumbnailFileExtension = filename.slice(filename.lastIndexOf('.'));
  const targetFilename = `${thumbnailFilename}-${height}-${width}${thumbnailFileExtension}`;
  if (checkIfFileExists(targetFilename, thumbnailImage)) {
    // return the image thumbnail
    return res
      .status(200)
      .sendFile(
        path.join(__dirname, `../../assets/${thumbnailImage}/${targetFilename}`)
      );
  } else {
    const imageResized = await createThumbnailImage(
      filename,
      targetFilename,
      height,
      width
    );
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
            `../../assets/${thumbnailImage}/${targetFilename}`
          )
        );
    }
  }
});

export default routes;

import express from 'express';
const routes = express.Router();
const fs = require('fs');

routes.get('/images', (req: express.Request, res: express.Response) => {
  const { filename, height, width } = req.query;

  let error = [];

  // check if query string is missing required parameters
  if (filename === undefined) {
    error.push('filename is required');
  }
  if (height === undefined) {
    error.push('height is required');
  }
  if (width === undefined) {
    error.push('width is required');
  }

  // check if file is missing
  if (filename) {
    try {
      if (fs.existsSync(`./assets/full/${filename}`)) {
        console.log(`${filename} was found!`);
      } else {
        error.push(`${filename} is missing`);
      }
    } catch (err) {
      console.error(err);
      error.push(`${filename} is missing`);
    }
  }

  if (error.length !== 0) {
    return res.status(400).send(error.toString());
  }

  // check if thumbnail image exists
  const thumbPath = `./assets/thumb/${filename}`
  try {
    if (fs.existsSync(thumbPath)) {
      return res.status(200).sendFile(thumbPath)
    } else {
      console.log('Thumbnail does not exist yet')
    }
  } catch (err) {
    console.error(err);
  }

  return res.status(200).send('api/images route');
});

export default routes;

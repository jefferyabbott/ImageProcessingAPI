import express from 'express';
const routes = express.Router();
import checkIfFileExists from '../services/fileOperations';

routes.get('/images', (req: express.Request, res: express.Response) => {
  const { height, width } = req.query;
  const filename: string = req.query.filename as string;

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

  if (error.length !== 0) {
    return res.status(400).send(error.toString());
  }

  // check if full image exists
  if (!checkIfFileExists(filename, 'full')) {
    return res.status(404).send(`${filename} not found`);
  }

  // check if thumbnail image exists
  if (!checkIfFileExists(filename, 'thumb')) {
    console.log(`Ok, we need to make this thumbnail image: ${filename}`);
  }

  return res.status(200).send('api/images route');
});

export default routes;

import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
  console.log('connected!');
  return res.send('main api route');
});

export default routes;

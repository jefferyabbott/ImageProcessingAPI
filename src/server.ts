import express from 'express';
import routes from './routes/index';
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

app.use('/api', routes);

app.get('/api', (req, res) => {
  return res.status(200).send('Image processing server is running.');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

export default app;

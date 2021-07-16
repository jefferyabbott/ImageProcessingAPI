import express from 'express';
import routes from './routes/index';
const app = express();
const port = process.env.PORT || 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('connected!');
  return res.send('We are now connected AGAIN');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

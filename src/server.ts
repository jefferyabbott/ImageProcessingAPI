import express from 'express';
import routes from './routes/index';
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')

// app.use(express.static(__dirname + '/../assets'));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')))

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

function myFunc() {
  return 25;
}

export default myFunc;

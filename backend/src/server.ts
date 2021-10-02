import express from 'express';
import cors from 'cors';
import path from 'path';
import api from './routes';

const app = express();

// require('./src/routes/__test__/node_modules/dotenv').config();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use('/api', api);

const PORT = process.env.PORT || 8000;

// Heroku deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening on port ${PORT}`);
});

module.exports = app;

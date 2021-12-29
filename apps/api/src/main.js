import * as express from 'express';
import imagesService from './app/services/getImages';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/images', async (req, res) => res.send(await imagesService.get()));

app.patch('/api/images/:id', (req, res) => imagesService.likeImage(req, res));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

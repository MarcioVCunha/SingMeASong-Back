import cors from 'cors';
import express from 'express';
import * as postMusicController from './controllers/postMusic.js';
import * as upvoteController from './controllers/upvoteMusic.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/recommendations', postMusicController.postMusic);
app.post('/recommendations/:id/upvote', upvoteController.upvote);

export default app;
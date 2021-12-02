import cors from 'cors';
import express from 'express';
import * as postMusicController from './controllers/postMusic.js';
import * as upvoteController from './controllers/upvoteMusic.js';
import * as downvoteController from './controllers/downvoteMusc.js';
import * as randomMusicController from './controllers/getRecommendation.js';
import * as topMusicsController from './controllers/topRecommendations.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/recommendations', postMusicController.postMusic);
app.post('/recommendations/:id/upvote', upvoteController.upvote);
app.post('/recommendations/:id/downvote', downvoteController.downvote);

app.get('/recommendations/random', randomMusicController.getRandomMusic);
app.get('/recommendations/top/:amount', topMusicsController.getTopXMusics);

export default app;
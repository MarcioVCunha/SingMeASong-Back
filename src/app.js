import cors from 'cors';
import express from 'express';
import { postMusic } from './controllers/postMusic.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/recommendations', postMusic);

export default app;
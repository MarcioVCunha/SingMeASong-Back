import './setup.js';
import './app.js';
import process from 'process';
import app from './app.js';

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Port ${PORT}`));
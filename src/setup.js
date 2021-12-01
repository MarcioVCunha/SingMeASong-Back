import dotenv from 'dotenv';
import process from 'process';

const { NODE_ENV } = process.env;

const path = (NODE_ENV === 'production') ? '.env' : '.env.test';

dotenv.config({
  path
});
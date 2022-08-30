import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const { HTTP_PORT } = process.env

app.listen(HTTP_PORT, () => console.log(`Server running on http://localhost:${HTTP_PORT}/`))

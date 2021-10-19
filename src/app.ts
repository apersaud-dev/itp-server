import express from 'express';
import cors from 'cors';

import authentication from './api/routes/authentication';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/u/', authentication);

export default app;
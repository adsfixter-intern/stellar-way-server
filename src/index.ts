import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import connectDB from './config/db';

const app = express();
const PORT = config.port;

// middleware
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('stellar way Server is Live!');
});


app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

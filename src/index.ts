import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from './app/config';
import connectDB from './app/config/db';
import globalRoutes from './app/routes/index';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import { createServer } from 'http';
import { setupSocket } from './app/utils/socket';

const app = express();
const PORT = config.port;


app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000', 
      'https://stellar-way.vercel.app'
    ];
    // origin undefined হলে (যেমন Postman বা সার্ভার-টু-সার্ভার) অনুমতি দেওয়া হচ্ছে
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // OPTIONS যোগ করা হয়েছে
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
connectDB();


const server = createServer(app);


const io = setupSocket(server);
app.set("socketio", io);

app.get('/', (req: Request, res: Response) => {
  res.send('stellar way Server is Live!');
});

app.use('/api/v1', globalRoutes);
app.use(globalErrorHandler);


server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
import express, {Request,Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import bodyParser from 'body-parser'; // information will be arrived as a .json to the server, convert it into JS object format

const app = express();

import postRoutes from './routes/posts'; // import routes
app.use(bodyParser.json()); // app middleware

app.use(postRoutes); // route middleware
app.use(cors());

const PORT: number = 8000;
// const DB_URL_TRADING: string = 'mongodb+srv://and:1234@cluster0.ts8avyn.mongodb.net/test?retryWrites=true&w=majority';
const DB_URL_TRADING: string = 'mongodb://localhost:27017/Trading'
// const DB_URL_LOGIN: string = 'mongodb+srv://and:1234@cluster0.ts8avyn.mongodb.net/employee?retryWrites=true&w=majority'

mongoose
  .connect(DB_URL_TRADING)
  .then(() => {
    console.log('DB Connected to TRADING');
  })
  .catch((err: any) => console.log('DB Connection error', err));

// mongoose.connect(DB_URL_LOGIN)
// .then(()=>{
// console.log('DB Connected LOGIN');
// })
// .catch((err)=>console.log('DB Connection error',err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

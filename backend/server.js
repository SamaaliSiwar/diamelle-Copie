import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import baguetestRouter from './routers/baguetestRouter.js';
import orderRouter from './routers/orderRouter.js';
import path from 'path';
import diamantRouter from './routers/diamantRouter.js';
import commandeRouter from './routers/commandeRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/uploads', uploadRouter);

app.use(express.urlencoded({extended: true}));
mongoose
  .connect(process.env.MONGODB_LOCAL_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use('/api/users', userRouter);
app.use('/api/baguestest', baguetestRouter);
app.use('/api/diamants', diamantRouter);
app.use('/api/orders', orderRouter);

app.use('/api/commandes', commandeRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);


app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

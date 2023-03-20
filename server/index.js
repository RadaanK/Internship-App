import {} from 'dotenv/config'
import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/User.js';
import postRoutes from './routes/posts.js';

 

const app = express();
app.use(morgan("tiny")) // log the request for debugging
app.use(bodyParser.json( {limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.use('/login', (req, res) => {
    res.send({
      token: 'aJkB3bje39!&3j20Y3'
    });
  });

const CONNECTION_URL = 'mongodb+srv://user:123@atlascluster.o48bpue.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server running on port:',PORT)))
    .catch((error) => console.log(error.message));






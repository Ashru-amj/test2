// server.mjs
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
app.get('/api/users', async (req, res) => {
    res.json({ message: 'Get all users route placeholder' });
  });

mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority',
    },
})
  .then(() => console.log('mongoose connected'))
  .catch((error) => console.error(error));

app.use(express.json())

app.use(express.static(path.join(__dirname,"..","client","build")))
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
  


import express from 'express';
import router from './src/routes/route.js';
const app = express();


// global routes--------------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes middleware---------------------------------------------------------------
app.use('/', router);
export default app;


import app from "./app.js";
import { startServer } from "./src/db/mongoose.js";
import * as dotenv from "dotenv";
dotenv.config();
const { PORT, MONGODB_URL } = process.env;

startServer(app, PORT, MONGODB_URL);

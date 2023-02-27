import express from "express";
import users from './routes/users'
import config from "./config";
import { loggerHandler } from './logger'
import { errorHandler } from "./middleware/errorWrapper";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(`/api/${config.version}`, users);
app.use(errorHandler);
app.use(loggerHandler);

export default app;
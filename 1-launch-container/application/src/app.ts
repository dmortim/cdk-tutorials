import express from "express";
import users from './routes/users'
import logger from './logger'
import config from "./config";
import { errorHandler } from "./middleware/errorWrapper";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())


app.use(`/api/${config.version}`, users);

app.use((req, res, next) => {
  const message = { method: req.method, url: req.url, sourceIp: req.ip, statusCode: res.statusCode }
  if (res.statusCode >= 400) 
    logger.error(message)
  else
    logger.info(message);
  next();
});
app.use(errorHandler) 

export default app;
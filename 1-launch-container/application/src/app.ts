import express from "express";
import users from './routes/users'
import logger from './logger'

const app = express();

app.use((req, res, next) => {
  const message = { method: req.method, url: req.url, sourceIp: req.ip, statusCode: res.statusCode }
  if (res.statusCode >= 400) 
    logger.error(message)
  else
    logger.info(message);
  next();
});

app.use('/users', users);

export default app;
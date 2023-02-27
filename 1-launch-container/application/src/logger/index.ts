import { NextFunction, Request, Response } from 'express';
import winston from 'winston';
import config from '../config'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: config.applicationName },
  transports: [
    new winston.transports.Console()
  ]
});

export const loggerHandler = (req: Request, res: Response, next: NextFunction) => {
  const message = { method: req.method, url: req.url, sourceIp: req.ip, statusCode: res.statusCode }
  if (res.statusCode >= 400) 
    logger.error(message)
  else
    logger.info(message);
  next();
}


export default logger;
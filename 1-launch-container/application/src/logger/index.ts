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

export default logger;
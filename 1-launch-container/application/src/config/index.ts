import { Dialect, Options } from "sequelize";

function parsePortEnvVar(port: string | undefined, defaultPort: number): number {
  const portEnvVar: number | string = parseInt(port || '');
  return Number.isInteger(portEnvVar) ? portEnvVar : defaultPort;
}

const app_port: number = parsePortEnvVar(process.env.PORT, 3000);
const db_port: number = parsePortEnvVar(process.env.DB_PORT, 3001);

const environment: string = process.env.ENVIRONMENT || 'local';

const config = {
  port: app_port,
  environment: environment,
  applicationName: 'my-express-app',
  database: {
    database: process.env.DB_NAME || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || '',
    port: db_port,
    dialect: 'postgres' as Dialect
  }
}


export default config 
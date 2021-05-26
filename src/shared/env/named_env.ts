export const NamedEnv = {
  app: {
    host: process.env.host,
    port: process.env.host,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    pwd: process.env.POSTGRES_PASSWORD,
  },
};

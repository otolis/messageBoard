require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});
const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  database: process.env.DATABASE_DB,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB,
});

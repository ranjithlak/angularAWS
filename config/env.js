const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const env = {
  database: "portal",
  username: "root",
  password: "root1234",
  operatorsAliases: Sequelize.Op /* here magic occurs */,
  host: "mysqltest.cjcrqd1tgktv.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;

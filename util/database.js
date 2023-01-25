const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "shaheerkhanns@NODE", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

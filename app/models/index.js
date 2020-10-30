const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//include db tables
db.user = require("../models/TblUsers.js")(sequelize, Sequelize);
db.book = require("../models/TblBook")(sequelize, Sequelize);
db.author = require("../models/TblAuthor")(sequelize, Sequelize);

//associations db schema
db.author.hasMany(db.book, { foreignKey: 'AuthorID' })
db.book.belongsTo(db.author, { foreignKey: "AuthorID" })

module.exports = db;

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
db.library = require("../models/TblLibrary")(sequelize, Sequelize);
db.librariesBook = require("../models/TblLibrarysBook")(sequelize, Sequelize);
db.summary = require("../models/TblSummary")(sequelize, Sequelize);

//associations db schema
//author and book
db.author.hasMany(db.book, { foreignKey: 'AuthorID' });
db.book.belongsTo(db.author, { foreignKey: "AuthorID" });

//user and library
db.user.hasMany(db.library, { foreignKey: "UserID" });
db.library.belongsTo(db.user, { foreignKey: "UserID" });

//libraries and librariesBook
db.library.hasMany(db.librariesBook, { foreignKey: "LibraryID" });
db.librariesBook.belongsTo(db.library, { foreignKey: "LibraryID" });

//book and librariesBook
db.book.hasMany(db.librariesBook, { foreignKey: "BookID" });
db.librariesBook.belongsTo(db.book, { foreignKey: "BookID" });

//user and summary
db.user.hasMany(db.summary, { foreignKey: "UserID" });
db.summary.belongsTo(db.user, { foreignKey: "UserID" });

//book and summary
db.book.hasMany(db.summary, { foreignKey: "BookID" });
db.summary.belongsTo(db.book, { foreignKey: "BookID" });

module.exports = db;
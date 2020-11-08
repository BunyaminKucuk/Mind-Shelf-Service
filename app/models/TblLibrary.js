module.exports = (sequelize, Sequelize) => {
  const TblLibrary = sequelize.define("TblLibrarys", {
    LibraryID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      autoIncrement: true
    },
    LibraryName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    LibraryIsDeleted: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    UserID: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: {
          msg: "UserID cannot be left blank"
        }
      }
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  return TblLibrary;
};


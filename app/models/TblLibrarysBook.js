module.exports = (sequelize, Sequelize) => {
  const TblLibrarysBook = sequelize.define("TblLibrarysBooks", {
    RecordID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      autoIncrement: true
    },
    LibraryID: {
      type: Sequelize.INTEGER(11),
      validate: {
        notEmpty: {
          msg: "LibraryID cannot be left blank"
        }
      }
    },
    BookID: {
      type: Sequelize.INTEGER(11),
      validate: {
        notEmpty: {
          msg: "BookID cannot be left blank"
        }
      }
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  TblLibrarysBook.associate = function (models) {
    // associations can be defined here
  };

  return TblLibrarysBook;
};

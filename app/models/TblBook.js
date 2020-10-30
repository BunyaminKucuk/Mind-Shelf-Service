module.exports = (sequelize, Sequelize) => {
  const TblBook = sequelize.define("TblBooks", {
    BookID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      autoIncrement: true
    },
    BookName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    BookPage: {
      type: Sequelize.INTEGER(255),
      allowNull: false
    },
    BookType: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    Publisher: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    PublicationYear: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    BookIsDeleted: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    AuthorID: {
      type: Sequelize.INTEGER(11),
      validate: {
        notEmpty: {
          msg: "AuthorID cannot be left blank"
        }
      }
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  return TblBook;
};

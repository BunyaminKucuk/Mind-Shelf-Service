module.exports = (sequelize, Sequelize) => {
  const TblAuthors = sequelize.define("TblAuthors", {
    AuthorID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      autoIncrement: true
    },
    AuthorFirstName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    AuthorLastName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    AuthorIsDeleted: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  
  return TblAuthors;
};

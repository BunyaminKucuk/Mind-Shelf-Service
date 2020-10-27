module.exports = (sequelize, Sequelize) => {
  const TblUser = sequelize.define("TblUsers", {
    UserID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      autoIncrement: true
    },
    UserName: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true
    },
    UserFirstName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    UserLastName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    UserMail: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    UserType: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    UserStatus: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    UserPassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  return TblUser;
};

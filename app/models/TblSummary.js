module.exports = (sequelize, Sequelize) => {
  const TblSummary = sequelize.define("TblSummarys", {
    SummaryID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      autoIncrement: true
    },
    SummaryText: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    SummaryIsDeleted: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    BookID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "BookID cannot be left blank"
        }
      }
    },
    UserID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
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

  return TblSummary;
};

module.exports = (sequelize, Sequelize) => {
    const TblComment = sequelize.define("TblComments", {
        CommentID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            autoIncrement: true
        },
        CommentName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        CommentText: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        SummaryID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "SummaryID cannot be left blank"
                }
            }
        },
        UserID: {
            type: Sequelize.INTEGER(11),
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

    TblComment.associate = function (models) {
        // associations can be defined here
    };

    return TblComment;
};

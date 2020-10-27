const db = require("../models");
const User = db.user;
var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.allUsers = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
}

exports.getById = (req, res) => {
    User.findByPk(req.query.user_id).then(user => {
        res.status(200)
            .send({
                user_data: user
            });
    });
}

exports.updateUserStatus = (req, res) => {
    User.update(
        { UserStatus: req.query.user_status },
        { returning: true, where: { UserID: req.query.user_id } }
    )
        .then((result) => {
            res.status(200)
                .send({
                    message: 'UserStatus update success!',
                    result: result,
                });
        })
        .catch((err) => {
            res.status(500)
                .send({
                    message: err
                });
        });
}

exports.profileEdit = (req, res) => {
    User.update(
        {
            UserName: req.body.UserName,
            UserFirstName: req.body.UserFirstName,
            UserLastName: req.body.UserLastName,
            UserMail: req.body.UserMail,
            UserType: req.body.UserType, // admin
            UserStatus: req.body.UserStatus, // aktif
            UserPassword: bcrypt.hashSync(req.body.UserPassword, 12),
        },
        { returning: true, where: { UserID: req.query.user_id } }
    )
        .then((result) => {
            res.status(200)
                .send({
                    message: 'UserProfile update success!',
                    result: result,
                });
        })
        .catch((err) => {
            res.status(500)
                .send({
                    message: err
                });
        });
}

exports.userDelete = (req, res) => {
    User.destroy({
        where: {
            UserID: req.query.user_id
        }
    })
        .then(function (deletedRecord) {
            if (deletedRecord === 1) {
                res.status(200).json({ message: "Deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

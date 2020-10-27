const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    UserName: req.body.UserName,
    UserFirstName: req.body.UserFirstName,
    UserLastName: req.body.UserLastName,
    UserMail: req.body.UserMail,
    UserType: req.body.UserType, // admin
    UserStatus: req.body.UserStatus, // aktif
    UserPassword: bcrypt.hashSync(req.body.UserPassword, 12),
  })
    .then(user => {
      res.send({ message: "User registered successfully!", user: user });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {

  User.findOne({
    where: {
      UserName: req.body.UserName
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.UserPassword,
        user.UserPassword
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.UserID }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user.UserID,
        username: user.UserName,
        email: user.UserMail,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

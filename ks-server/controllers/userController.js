const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

const UserController = {};

/* Get all users */
/* UserController.getAllUsers = (req, res) => {
  User.findAll({
    where: req.query,
    attributes: ['username', 'email'],
  })
    .then((users) => {
      res.json(users);
    }).catch((error) => {
      res.json(error);
    });
}; */

/* Get a user */
UserController.getUserById = (req, res) => {
  User.findOne({
    where: {username: req.user.username},
    attributes: ['username', 'email'],
  }).then((users) => {
    res.json(users);
  }).catch((error) => {
    res.json(error);
  });
};

UserController.returnUser = (req, res) => {
  var bearerHeader = req.headers['authorization'];
  var token;

  if (bearerHeader) {
    var bearer = bearerHeader.split(" ");
    token = bearer[1];

    jwt.verify(token, config.keys.secret, function (err, decoded) {
      User.findOne({
        where: {username: decoded.username},
        attributes: ['username'],
      }).then((user) => {
        if(user) {
          res.json(user)
        } else {
          res.json({
            message: 'User does not exist!'
          })
        }
      }).catch((error) => {
        res.json(error);
      });
    })
  }
}

UserController.updateUser = (req, res) => {
  User.update(
      {biography: req.body.biography},
      {where: {username: req.params.username}}
  )
  .then(result => {
      res.json(result)
  })
  .catch(err => {
      res.json(err)
  })
}

module.exports = UserController;
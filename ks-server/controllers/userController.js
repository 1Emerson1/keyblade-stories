const User = require('../models/User');

const UserController = {};

/* Get all users */
UserController.getAllUsers = (req, res) => {
  User.findAll({
    where: req.query,
    attributes: ['username', 'email'],
  })
    .then((users) => {
      res.json(users);
    }).catch((error) => {
      res.json(error);
    });
};

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

module.exports = UserController;

const jwt = require('jsonwebtoken');
const fs = require('fs');
const config = require('../config');
const db = require('../database');
const User = require('../models/User');

// The authentication controller.
const AuthController = {};

// Register a user.
AuthController.signUp = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({
      message: 'Please provide a username, email and a password.',
    });
  } else {
    db.sync().then(() => {
      if(req.body.coverImage) {
        var img = new Buffer(fs.readFileSync(req.body.coverImage)).toString('base64');
      }
      const newUser = {
        username: req.body.username,
        password: req.body.password,
        coverImage: img,
      };

      User.findOne({
        where: {
          username: newUser.username,
        },
      }).then((user) => {
        if(user){
          res.status(401).json({
            message: 'Username already exists!',
          });
        } else {
          return User.create(newUser).then(() => {
            res.status(201).json({
              message: 'Account created!',
            });
          });
        }
      })
    }).catch((error) => {
      console.log(error)
      res.status(403).json({
        message: error,
      });
    });
  }
};

// get user.
AuthController.getUserByJwt = (req, res) => {
  var bearerHeader = req.headers['authorization'];
  var token;

  if (bearerHeader) {
    var bearer = bearerHeader.split(" ");
    token = bearer[1];

    jwt.verify(token, config.keys.secret, function (err, decoded) {
      console.log(decoded.username)

      User.findOne({
        where: {username: decoded.username},
      }).then((users) => {
        res.json(users);
      }).catch((error) => {
        res.json(error);
      });
/*       if(err) {
        console.log(err);
      } else {
        // Fetch the user by id 
          User.findOne({_username: decoded.username}).then(function(user){
            // Do something with the user
            res.status(200).json({
              user
            });
        });
      } */
    })
  }
};

// Authenticate a user.
AuthController.authenticateUser = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(404).json({
      message: 'Username and password are needed!',
    });
  } else {
    const username = req.body.username;
    const password = req.body.password;
    const potentialUser = {
      where: {
        username,
      },
    };
    User.findOne(potentialUser).then((user) => {
      if (!user) {
        res.status(401).json({
          message: 'Username not found!',
        });
      } else {
        user.comparePasswords(password, user.password, (error, isMatch) => {
          if (isMatch && !error) {
            const token = jwt.sign({
              username: user.username,
            },
            config.keys.secret, {
              expiresIn: '1d',
            },
            );
            res.json({
              success: true,
              token: `${token}`
            });
          } else {
            res.status(403).json({
              message: 'Login failed!',
            });
          }
        });
      }
    }).catch(() => {
      res.status(500).json({
        message: 'There was an error!',
      });
    });
  }
};

AuthController.updateUser = (req, res) => {
  console.log(req.body.biography);

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

module.exports = AuthController;
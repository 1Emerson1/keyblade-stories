const jwt = require('jsonwebtoken');
const db = require('../config/database');
const config = require('../config/config');
const User = require('../model/user.model');

//const User = db.user;

exports.getUsers = (req, res) => {
  User.findAll().then(users => res.json(users))
}

// exports.signup = (req, res) => {
//   if (!req.body.username || !req.body.password || !req.body.email) {
//     res.json({
//       message: 'Please provide a username, email and a password.',
//     });
//   } else {
//     db.sync().then(() => {
//       const newUser = {
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//       };

//       return User.create(newUser).then(() => {
//         res.status(201).json({
//           message: 'Account created!',
//         });
//       });
//     }).catch((error) => {
//       res.status(403).json({
//         message: error,
//       });
//     });
//   }
// }

exports.signup = (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.json({
      message: 'Please provide a username, email and a password.',
    });
  } else {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };
    // Save User to Database
    User.create(newUser).then(() => {
      res.status(201).json({
        message: 'Account created!',
      });
    }).catch(err => {
      res.status(500).send({ error: err.message });
    })
  }
}
 
exports.signin = (req, res) => {
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
        res.status(404).json({
          message: 'Authentication failed!',
        });
      } else {
        user.comparePasswords(password, (error, isMatch) => {

          if (isMatch && !error) {
            const token = jwt.sign({
              username: user.username,
            },
            config.keys.secret, {
              expiresIn: '300m',
            },
            );
            res.json({
              success: true,
              token: `JWT ${token}`
            });
          } else {
            res.status(404).json({
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
}
 
exports.userContent = (req, res) => {
  User.findOne({
    where: { id: req.userId },
    attributes: ['name', 'username', 'email'],
    include: [{
      model: Role,
      attributes: ['id', 'name'],
      through: {
        attributes: ['userId', 'roleId'],
      }
    }]
  }).then(user => {
    res.status(200).send({
      'description': '>>> User Contents!',
      'user': user
    });
  }).catch(err => {
    res.status(500).send({
      'description': 'Can not access User Page',
      'error': err
    });
  })
}
 
exports.adminBoard = (req, res) => {
  User.findOne({
    where: { id: req.userId },
    attributes: ['name', 'username', 'email'],
    include: [{
      model: Role,
      attributes: ['id', 'name'],
      through: {
        attributes: ['userId', 'roleId'],
      }
    }]
  }).then(user => {
    res.status(200).send({
      'description': '>>> Admin Contents',
      'user': user
    });
  }).catch(err => {
    res.status(500).send({
      'description': 'Can not access Admin Board',
      'error': err
    });
  })
}
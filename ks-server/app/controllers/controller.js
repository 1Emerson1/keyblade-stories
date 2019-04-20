const db = require('../config/db.config');
const config = require('../config/config');
const User = db.user;
const User_Login = db.user_login;
const Role = db.role;
 
const Op = db.Sequelize.Op;
 
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.getUsers = (req, res) => {
  User.findAll().then(users => res.json(users))
}

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }).then(user => {
    Role.findAll({
      where: {
        name: {
          [Op.or]: req.body.roles
        }
      }
    }).then(roles => {
      user.setRoles(roles).then(() => {
        res.send({ message: 'Registered successfully!' });
      });
    }).catch(err => {
      res.status(500).send({ reason: err.message });
    });
  }).catch(err => {
    res.status(500).send({ reason: err.message });
  })
}
 
exports.signin = (req, res) => {
  User_Login.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ reason: 'User Not Found.' });
    }
 
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, accessToken: null, reason: 'Invalid Password!' });
    }
 
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
 

  }).catch(err => {
    res.status(500).send({ reason: err.message });
  });
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
 
exports.managementBoard = (req, res) => {
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
      'description': '>>> Project Management Board',
      'user': user
    });
  }).catch(err => {
    res.status(500).send({
      'description': 'Can not access Management Board',
      'error': err
    });
  })
}
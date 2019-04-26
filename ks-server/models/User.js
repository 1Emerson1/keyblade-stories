// The User model.
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const config = require('../config');
const db = require('../database');

var modelDefinition = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    profileImage: {
        type: Sequelize.STRING,
        allowNull: true,
    },
};

const modelOptions = {
  instanceMethods: {
    comparePasswords: comparePasswords,
  },
  hooks: {
    beforeValidate: hashPassword
  },
};

const UserModel = db.define('User', modelDefinition, modelOptions);

// Compare passwords
function comparePasswords(input_password, hash, callback) {

  bcrypt.compare(input_password, hash, function (error, isMatch) {
    if (error) {
      return callback(error);
    }

    return callback(null, isMatch);
  });
}

// Hash the password
function hashPassword(user) {
  console.log("hashing password")
  return bcrypt.hash(user.password, 10).then(function (hash){
    user.password = hash;
  });
}

module.exports = UserModel;
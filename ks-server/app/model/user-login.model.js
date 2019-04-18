module.exports = (sequelize, DataTypes) => {
    const User_Login = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING,
      }
    }, {
      timestamps: false
    });
      
    return User_Login;
  }
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING
    },
    profileImage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false
  });
    
  return User;
}
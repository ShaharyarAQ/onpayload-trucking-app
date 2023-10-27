module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    role: {
      allowNull: true,
      type: DataTypes.ENUM(['admin', 'associate'])
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  });

  return User;
};
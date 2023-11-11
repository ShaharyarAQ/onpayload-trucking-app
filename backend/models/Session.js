module.exports = function (sequelize, Sequelize) {
  var Session = sequelize.define('Session', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    token: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('NOW()')
  },
  });

  return Session;
};
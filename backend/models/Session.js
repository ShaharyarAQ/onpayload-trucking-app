module.exports = function (sequelize, DataTypes) {
    var Session = sequelize.define('Session', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          user: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
          deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
          }
    });

    return Session;
};
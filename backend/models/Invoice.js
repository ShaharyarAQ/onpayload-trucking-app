module.exports = function (sequelize, DataTypes) {
    var Invoice = sequelize.define('Invoice', {
        id: {
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          client: {
            type: DataTypes.STRING(80),
            allowNull: true
          },
          invoiceTitle: {
            type: DataTypes.STRING(80),
            allowNull: true
          },
          invoiceDate: {
            type: DataTypes.DATE,
            allowNull: true
          },
          message: {
            type: DataTypes.STRING(500),
            allowNull: true
          },
          items: {
            type: DataTypes.STRING(500),
            allowNull: true
          },
          tax: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          total: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          status:{
            type: DataTypes.ENUM(['Paid', 'Unpaid', 'Canceled']),
            allowNull: true
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

    return Invoice;
};
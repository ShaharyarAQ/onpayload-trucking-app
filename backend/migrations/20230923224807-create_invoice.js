'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      invoiceTitle: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      invoiceDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      items: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      tax: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status:{
        type: Sequelize.ENUM(['Paid', 'Unpaid', 'Canceled']),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Invoices');
  }
};
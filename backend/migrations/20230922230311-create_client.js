'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      contactNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      companyName: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      billingAddress: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      note: {
        type: Sequelize.STRING(500),
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
    await queryInterface.dropTable('Clients');
  }
};
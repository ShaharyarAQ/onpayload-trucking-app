'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Iftas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tripDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jurisdiction: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      tripType:{
        type: Sequelize.ENUM(['Loaded', 'Not Loaded']),
        allowNull: false
      },
      vehicle: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      odometerStart: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      odometerEnd: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nonTaxableDistance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tollMiles: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nonTollMiles: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fuelPurchased: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      note: {
        allowNull: false,
        type: Sequelize.STRING(500)
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
    await queryInterface.dropTable('Iftas');
  }
};
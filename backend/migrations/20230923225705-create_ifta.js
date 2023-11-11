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
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jurisdiction: {
        type: Sequelize.ENUM(['AL', 'AK', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
        'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT',
        'NC', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
        'VT', 'VA', 'WA', 'WI', 'WV', 'WY', 'Can', 'Mex']),
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
        allowNull: true
      },
      odometerEnd: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nonTaxableDistance: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      tollMiles: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nonTollMiles: {
        type: Sequelize.INTEGER,
        allowNull: true
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
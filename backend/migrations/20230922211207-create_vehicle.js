'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unitNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      make: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      model: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      odometer: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      plateNumber: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      vin: {
        type: Sequelize.STRING(17),
        allowNull: true
      },
      vehicleType: {
        type: Sequelize.ENUM([
          'Truck Tractor', 'Pickup Truck', 'Box Truck', 'Trailer', 'Cargo Van','Other']),
        allowNull: true
      },
      driverId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Members',
          key: 'id'
        },
      },
      note: {
        type: Sequelize.STRING(500),
        allowNull: true
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
    await queryInterface.dropTable('Vehicles');
  }
};
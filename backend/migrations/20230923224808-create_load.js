'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hashedId: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      status: {
        allowNull: false,
        default: { current: 'Created', timeline: [] },
        type: Sequelize.JSON
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      driverId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Members',
          key: 'id'
        },
      },
      pay: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pickupCity: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      pickupState: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      pickupZipcode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      destinationCity: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      destinationState: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      destinationZipcode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      loadType: {
        type: Sequelize.ENUM([
          'Dry Van', 'Reefer', 'Flatbed', 'Step-Deck', 'Hazmat',
          'Twic', 'Tanker', 'Dry Bulk', 'Lowboy', 'Dump Trailer',
          'Conestoga', 'Hotshot', 'RGN', 'Curtainside', 'Sprinter Van',
          'Other']),
        allowNull: false
      },
      dispatcherId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Members',
          key: 'id'
        },
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id'
        },
      },
      trailerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id'
        },
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'id'
        },
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
    await queryInterface.dropTable('Loads');
  }
};
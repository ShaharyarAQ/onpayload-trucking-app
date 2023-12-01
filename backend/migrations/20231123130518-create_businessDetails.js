'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusinessDetails', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      ein: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BusinessDetails');
  }
};
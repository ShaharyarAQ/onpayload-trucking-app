'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IftaSettings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jurisdiction: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      iftaIdNumber: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      signingAuthority: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IftaSettings');
  }
};
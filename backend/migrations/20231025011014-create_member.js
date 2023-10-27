'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Members', {
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
      firstName: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      licenseId: {
        type: Sequelize.STRING(40),
        allowNull: true
      },    
      contactNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      emailAddress: {
        type: Sequelize.STRING(128),
        allowNull: true
      },
      emergencyContactNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      mailAddress: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      jobTitle: {
        type: Sequelize.ENUM([
          'Driver', 'Dispatcher', 'Manager', 'Owner', 'Operator','Supervisor',
          'Accountant', 'Business Partner', 'Board Member', 'Assistant', 'Clerk',
          'Staff', 'Mechanic', 'Security Guard','Other']),
        allowNull: true
      },
      employmentType: {
        type: Sequelize.ENUM([
          'Employee', 'Independent Contractor', 'Partner']),
        allowNull: true
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
    await queryInterface.dropTable('Members');
  }
};

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Incomes', {
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
      reference: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      payer: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paymentType: {
        type: Sequelize.ENUM([
          'Cash', 'Cheque', 'Credit Card', 'EFT', 'ACH',
          'Direct Deposit', 'Zelle', 'Other']),
        allowNull: false
      },
      processedBy: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      incomeCategory: {
        type: Sequelize.ENUM([
          'Loads', 'Sales', 'Rental', 'Dispatch', 'Leasing',
          'Consulting', 'Accesorial', 'Advance', 'Fuel Surcharge',
          'Reimbursement', 'Repair Services', 'Other']),
        allowNull: false
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Vehicles',
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
    await queryInterface.dropTable('Incomes');
  }
};
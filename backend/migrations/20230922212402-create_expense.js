'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Expenses', {
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
      paidBy: {
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
      payee: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      expenseCategory: {
        type: Sequelize.ENUM([
          'Accessorial Deduction', 'Accessorial Expense', 'Accident Deductible', 'Escrow-Maintenance',
          'Factoring Charges', 'Fax', 'Insurance-Health', 'Insurance-Trailer', 'Insurance-Truck',
          'Internet Fees', 'Lodging', 'Lumper Fee', 'Maintenence', 'Meals', 'Miscellaneous',
          'Office Supplies', 'Oil and/or Additives', 'Other Expense', 'Parking', 'Payments',
          'Payroll Taxes', 'Permits', 'Physical (DOT)', 'Processing Fees', 'Reimbursement', 'Rent',
          'Repair', 'Safety Clothing', 'Scale Tickets', 'Showers', 'STAX', 'Tax Paid', 'Toll',
          'Trailer Lease Payment', 'Truck Lease Payment', 'Truck Parts', 'Truck Repair and Maintenence',
          'Truck Tires', 'Truck Washes', 'Utilities', 'Wages']),
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
    await queryInterface.dropTable('Expenses');
  }
};
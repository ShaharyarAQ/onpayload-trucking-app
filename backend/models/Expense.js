module.exports = (sequelize, Sequelize) => {
  const Expense = sequelize.define("Expense", {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    reference: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    paidBy: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    paymentType: {
      type: Sequelize.ENUM([
        'Cash', 'Cheque', 'Credit Card', 'EFT', 'ACH',
        'Direct Deposit', 'Zelle', 'Other']),
      allowNull: true
    },
    payee: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    expenseCategory: {
      type: Sequelize.ENUM([
        'Accessorial Deduction','Accessorial Expense', 'Accident Deductible', 'Escrow-Maintenance',
        'Factoring Charges','Fax','Insurance-Health', 'Insurance-Trailer', 'Insurance-Truck',
        'Internet Fees', 'Lodging','Lumper Fee','Maintenence', 'Meals','Miscellaneous',
        'Office Supplies','Oil and/or Additives','Other Expense','Parking','Payments',
        'Payroll Taxes','Permits','Physical (DOT)','Processing Fees','Reimbursement','Rent',
        'Repair','Safety Clothing','Scale Tickets','Showers','STAX','Tax Paid','Toll',
        'Trailer Lease Payment','Truck Lease Payment','Truck Parts','Truck Repair and Maintenence',
        'Truck Tires','Truck Washes','Utilities','Wages']),
      allowNull: true
    },
    vehicle: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    note: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  });
  return Expense;
};
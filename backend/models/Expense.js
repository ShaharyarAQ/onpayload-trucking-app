module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define("Expense", {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    paidBy: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paymentType: {
      type: DataTypes.ENUM([
        'Cash', 'Cheque', 'Credit Card', 'EFT', 'ACH',
        'Direct Deposit', 'Zelle', 'Other']),
      allowNull: true
    },
    payee: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    expenseCategory: {
      type: DataTypes.ENUM([
        'Accessorial Deduction', 'Accessorial Expense', 'Accident Deductible', 'Escrow-Maintenance',
        'Factoring Charges', 'Fax', 'Insurance-Health', 'Insurance-Trailer', 'Insurance-Truck',
        'Internet Fees', 'Lodging', 'Lumper Fee', 'Maintenence', 'Meals', 'Miscellaneous',
        'Office Supplies', 'Oil and/or Additives', 'Other Expense', 'Parking', 'Payments',
        'Payroll Taxes', 'Permits', 'Physical (DOT)', 'Processing Fees', 'Reimbursement', 'Rent',
        'Repair', 'Safety Clothing', 'Scale Tickets', 'Showers', 'STAX', 'Tax Paid', 'Toll',
        'Trailer Lease Payment', 'Truck Lease Payment', 'Truck Parts', 'Truck Repair and Maintenence',
        'Truck Tires', 'Truck Washes', 'Utilities', 'Wages']),
      allowNull: true
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vehicles',
        key: 'id'
      },
    },
    note: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  });
  return Expense;
};
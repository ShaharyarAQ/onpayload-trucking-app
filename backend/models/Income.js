module.exports = (sequelize, Sequelize) => {
  const Income = sequelize.define("Income", {
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
    payer: {
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
    processedBy: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    incomeCategory: {
      type: Sequelize.ENUM([
        'Loads', 'Sales', 'Rental', 'Dispatch', 'Leasing',
        'Consulting', 'Accesorial', 'Advance', 'Fuel Surcharge',
        'Reimbursement', 'Repair Services', 'Other']),
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
  return Income;
};
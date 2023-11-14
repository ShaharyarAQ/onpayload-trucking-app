module.exports = (sequelize, DataTypes) => {
  const Income = sequelize.define("Income", {
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
    payer: {
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
    processedBy: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    incomeCategory: {
      type: DataTypes.ENUM([
        'Loads', 'Sales', 'Rental', 'Dispatch', 'Leasing',
        'Consulting', 'Accesorial', 'Advance', 'Fuel Surcharge',
        'Reimbursement', 'Repair Services', 'Other']),
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
  return Income;
};
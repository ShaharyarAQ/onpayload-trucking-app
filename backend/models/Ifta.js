module.exports = (sequelize, Sequelize) => {
  const Ifta = sequelize.define("Ifta", {
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
    jurisdiction: {
      type: Sequelize.ENUM(['AK', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
        'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT',
        'NC', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
        'VT', 'VA', 'WA', 'WI', 'WV', 'WY', 'Can', 'Mex']),
      allowNull: true
    },
    tripType: {
      type: Sequelize.ENUM(['Loaded', 'Not Loaded']),
      allowNull: true
    },
    vehicle: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    odometerStart: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    odometerEnd: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    distance: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    nonTaxableDistance: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    tollMiles: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    nonTollMiles: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    fuelPurchased: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    note: {
      allowNull: true,
      type: Sequelize.STRING(500)
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
  return Ifta;
};
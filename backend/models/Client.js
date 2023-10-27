module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("Client", {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    lastName: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(128),
      allowNull: true
    },
    contactNumber: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    companyName: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    billingAddress: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    city: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    state: {
      type: Sequelize.STRING(3),
      allowNull: true
    },
    zipcode: {
      type: Sequelize.INTEGER,
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
  return Client;
};
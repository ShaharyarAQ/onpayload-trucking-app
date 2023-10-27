module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define('Member', {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    licenseId: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    emailAddress: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    emergencyContactNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mailAddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    jobTitle: {
      type: DataTypes.ENUM([
        'Driver', 'Dispatcher', 'Manager', 'Owner', 'Operator', 'Supervisor',
        'Accountant', 'Business Partner', 'Board Member', 'Assistant', 'Clerk',
        'Staff', 'Mechanic', 'Security Guard', 'Other']),
      allowNull: true
    },
    employmentType: {
      type: DataTypes.ENUM([
        'Employee', 'Independent Contractor', 'Partner']),
      allowNull: true
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

  return Member;
};
module.exports = (sequelize, DataTypes) => {
    const BusinessDetails = sequelize.define("BusinessDetails", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        businessName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ein: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(150),
            allowNull: false
        }
    });
    return BusinessDetails;
};
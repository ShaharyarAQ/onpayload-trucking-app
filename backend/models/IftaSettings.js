module.exports = (sequelize, DataTypes) => {
    const iftaSettings = sequelize.define("IftaSettings", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        jurisdiction: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        iftaIdNumber: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        signingAuthority: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(150),
            allowNull: false
        }
    });
    return iftaSettings;
};
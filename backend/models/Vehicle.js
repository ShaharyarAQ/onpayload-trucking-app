module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("Vehicle", {
        id: {
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        unitNumber: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        make: {
            type: Sequelize.STRING(40),
            allowNull: true
        },
        model: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        odometer: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        plateNumber: {
            type: Sequelize.STRING(20),
            allowNull: true
        },
        vin: {
            type: Sequelize.STRING(17),
            allowNull: true
        },
        vehicleType: {
            type: Sequelize.ENUM([
                'Truck Tractor', 'Pickup Truck', 'Box Truck', 'Trailer', 'Cargo Van', 'Other']),
            allowNull: true
        },
        assignedDriver: {
            type: Sequelize.STRING(80),
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
    return Vehicle;
};
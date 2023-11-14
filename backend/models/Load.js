const db = require("./index");

module.exports = function (sequelize, DataTypes) {
    var Load = sequelize.define('Load', {
        id: {
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        hashedId: {
            allowNull: false,
            type: DataTypes.STRING(32)
        },
        status: {
            allowNull: false,
            defaultValue: { current: 'Created', timeline: [] },
            type: DataTypes.JSON
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        driverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Member',
                key: 'id'
            },
        },
        pay: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        pickupCity: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        pickupState: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        pickupZipcode: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        destinationCity: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        destinationState: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        destinationZipcode: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        distance: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        loadType: {
            type: DataTypes.ENUM([
                'Dry Van', 'Reefer', 'Flatbed', 'Step-Deck', 'Hazmat',
                'Twic', 'Tanker', 'Dry Bulk', 'Lowboy', 'Dump Trailer',
                'Conestoga', 'Hotshot', 'RGN', 'Curtainside', 'Sprinter Van',
                'Other']),
            allowNull: true
        },
        dispatcherId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Members',
                key: 'id'
            },
        },
        vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Vehicles',
                key: 'id'
            },
        },
        trailerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Vehicles',
                key: 'id'
            },
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clients',
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
    }, {});

    return Load;
};
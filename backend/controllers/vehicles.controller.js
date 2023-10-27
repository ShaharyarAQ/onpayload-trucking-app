const db = require("../models");
const VehicleModel = db.vehicle;


exports.getVehicles = async (req, res) => {
    const vehicles = await VehicleModel.findAll();
    try{
        return res.status(200).json(vehicles);
    }
    catch (error) {
        return res.status(404).json({message: 'Unable to get vehicles data'});
    }
}

exports.getVehicleInfo = async (req, res) => {
    const vehicleID = req.query.param;
    try {
        const vehicleInfo = await VehicleModel.findOne({ where: { id: vehicleID } });
        return res.status(200).json(vehicleInfo);
    } catch (error) {
        return res.status(404).json({message: 'Unable to get vehicle information'});
    }

}

exports.addVehicle = async (req, res) => {
    try {
        await VehicleModel.create({ ...req.body });
        return res.status(201).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}

exports.deleteVehicle = async (req, res) => {
    console.log('In Delete controller', req.query.param);
    const vehicleID = req.query.param;
    try {
        const response = await VehicleModel.destroy({ where: { id: vehicleID } });
        return res.status(200).json(response);
    } catch (error) {
        console.log('Error')
        return res.status(404).json({message: 'Unable to delete vehicle'});
    }
    
}
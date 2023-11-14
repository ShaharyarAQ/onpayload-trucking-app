const db = require("../models");
const ClientModel = db.client;

exports.getClients = async (req, res) => {
    const clients = await ClientModel.findAll();
    try {
        return res.status(200).json(clients);
    }
    catch (error) {
        return res.status(404).json({ message: 'Unable to get clients data' });
    }
}

exports.addClient = async (req, res) => {
    try {
        await ClientModel.create({ ...req.body });
        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}


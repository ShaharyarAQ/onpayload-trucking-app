var randomstring = require("randomstring");

const db = require("../models");
const { sendLoadEmail } = require("../services/email");
const LoadModel = db.load;

exports.get = async (req, res) => {
    try {
        const loads = await LoadModel.findAll({
            include: [
                { model: db.member, as: 'driver' },
                { model: db.member, as: 'dispatcher' },
                { model: db.client, as: 'client' },
                { model: db.vehicle, as: 'vehicle' },
                { model: db.vehicle, as: 'trailer' },
            ]
        });
        return res.status(200).json(loads);
    }
    catch (error) {
        console.error(error);
        return res.status(404).json({ message: 'Unable to get loads data' });
    }
}

exports.getHashed = async (req, res) => {
    try {
        const loadInfo = await LoadModel.findOne({
            where: { hashedId: req.params.hashedId }, include: [
                { model: db.member, as: 'driver' },
                { model: db.member, as: 'dispatcher' },
                { model: db.client, as: 'client' },
                { model: db.vehicle, as: 'vehicle' },
                { model: db.vehicle, as: 'trailer' },
            ]
        });
        return res.status(200).json(loadInfo);
    } catch (error) {
        return res.status(404).json({ message: 'Unable to get load information' });
    }
}

exports.getOne = async (req, res) => {
    try {
        const loadInfo = await LoadModel.findOne({
            where: { id: req.params.id },
            include: [
                { model: db.member, as: 'driver' },
                { model: db.member, as: 'dispatcher' },
                { model: db.client, as: 'client' },
                { model: db.vehicle, as: 'vehicle' },
                { model: db.vehicle, as: 'trailer' },
            ]
        });
        loadInfo.dataValues.date = loadInfo.dataValues.date.toISOString().split('T')[0];
        return res.status(200).json(loadInfo);
    } catch (error) {
        return res.status(404).json({ message: 'Unable to get load information' });
    }
}

exports.add = async (req, res) => {
    try {
        const hashedId = randomstring.generate({
            length: 32,
            charset: 'hex',
            readable: true,
            capitalization: 'uppercase'
        });

        await LoadModel.create({ ...req.body, hashedId });

        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const response = await LoadModel.update(req.body, { where: { id: req.query.param } });
        return res.status(200).json(response);
    }
    catch (error) {
        console.log('Error')
        return res.status(404).json({ message: 'Unable to update load' });
    }
}

exports.startLoad = async (req, res) => {
    try {
        //{"current":"Pending","timeline":[{"name":"Pending","time":"","type":"pending"},{"name":"At Shipper","time":"","type":"in progress"},{"name":"Loaded","time":"","type":"pending"},{"name":"In Transit","time":"","type":"pending"},{"name":"At Reciever","time":"","type":"pending"},{"name":"Delivered","time":"","type":"pending"}]}
        const status = {
            current: 'Pending',
            timeline: [
                { name: 'Pending', time: (new Date()).toISOString(), type: 'completed' },
                { name: 'At Shipper', time: '', type: 'in progress' },
                { name: 'Loaded', time: '', type: 'pending' },
                { name: 'In Transit', time: '', type: 'pending' },
                { name: 'At Reciever', time: '', type: 'pending' },
                { name: 'Delivered', time: '', type: 'pending' },
            ]
        }

        const response = await LoadModel.update({ status }, { where: { hashedId: req.params.hashedId } });

        const loadInfo = await LoadModel.findOne({
            where: { hashedId: req.params.hashedId }, include: [
                { model: db.member, as: 'driver' },
                { model: db.member, as: 'dispatcher' },
                { model: db.client, as: 'client' },
                { model: db.vehicle, as: 'vehicle' },
                { model: db.vehicle, as: 'trailer' },
            ]
        });

        if (loadInfo) {
            const link = `http://localhost:4200/load-status?id=${req.params.hashedId}`;
            loadDetails = loadInfo.dataValues;
            sendLoadEmail(loadInfo.dataValues.driver.emailAddress, "New Job inititiated", { loadDetails, link });
            return res.status(200).json(response);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Unable to update load' });
    }
}

exports.updateWithHashedId = async (req, res) => {
    try {
        const response = await LoadModel.update(req.body, { where: { hashedId: req.params['hashedId'] } });
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Unable to update load' });
    }
}

exports.delete = async (req, res) => {
    try {
        const response = await LoadModel.destroy({ where: { id: req.params.id } });
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Unable to delete load' });
    }
}
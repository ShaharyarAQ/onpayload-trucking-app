const db = require("../models");
const IftaModel = db.ifta;

exports.get = async (req, res) => {
    try {
        const iftas = await IftaModel.findAll();
        return res.status(200).json(iftas);
    }
    catch (error) {
        return res.status(404).json({ message: 'Unable to get iftas data' });
    }
}

exports.getOne = async (req, res) => {
    try {
        const iftaInfo = await IftaModel.findOne({ where: { id: req.params.id } });
        iftaInfo.dataValues.date = iftaInfo.dataValues.date.toISOString().split('T')[0];
        return res.status(200).json(iftaInfo);
    } catch (error) {
        return res.status(404).json({ message: 'Unable to get ifta information' });
    }
}

exports.add = async (req, res) => {
    try {
        await IftaModel.create({ ...req.body });
        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const response = await IftaModel.update(req.body, { where: { id: req.query.param } });
        return res.status(200).json(response);
    }
    catch (error) {
        console.log('Error')
        return res.status(404).json({ message: 'Unable to update ifta record' });
    }
}

exports.delete = async (req, res) => {
    try {
        const response = await IftaModel.destroy({ where: { id: req.params.id } });
        return res.status(200).json(response);
    } catch (error) {
        console.log('Error')
        return res.status(404).json({ message: 'Unable to delete ifta' });
    }
}
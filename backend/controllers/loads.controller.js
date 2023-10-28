const db = require("../models");
const LoadModel = db.load;

exports.get = async (req, res) => {
    try {
        const loads = await LoadModel.findAll();
        return res.status(200).json(loads);
    }
    catch (error) {
        return res.status(404).json({ message: 'Unable to get loads data' });
    }
}

exports.getOne = async (req, res) => {
    try {
        const loadInfo = await LoadModel.findOne({ where: { id: req.params.id } });
        return res.status(200).json(loadInfo);
    } catch (error) {
        return res.status(404).json({ message: 'Unable to get load information' });
    }

}
exports.add = async (req, res) => {
    try {
        await LoadModel.create({ ...req.body });
        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const response = await LoadModel.destroy({ where: { id: req.params.id } });
        return res.status(200).json(response);
    } catch (error) {
        console.log('Error')
        return res.status(404).json({ message: 'Unable to delete load' });
    }
}
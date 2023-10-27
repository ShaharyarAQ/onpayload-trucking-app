const db = require("../models");
const IftaModel = db.ifta;


exports.addIfta = async (req, res) => {
    try {
        await IftaModel.create({ ...req.body });
        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}
const db = require("../models");
const LoadModel = db.load;



exports.getLoads = async (req, res) => {
    const loads = await LoadModel.findAll();
    try{
        return res.status(200).json(loads);
    }
    catch (error) {
        return res.status(404).json({message: 'Unable to get loads data'});
    }
}

exports.getLoadInfo = async (req, res) => {
    const loadID = req.query.param;
    try {
        const loadInfo = await LoadModel.findOne({ where: { id: loadID } });
        return res.status(200).json(loadInfo);
    } catch (error) {
        return res.status(404).json({message: 'Unable to get load information'});
    }

}
exports.addLoad = async (req, res) => {
    try {
        await LoadModel.create({ ...req.body });
        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}

exports.deleteLoad = async (req, res) => {
    const loadID = req.query.param;
    try {
        const response = await LoadModel.destroy({ where: { id: loadID } });
        return res.status(200).json(response);
    } catch (error) {
        console.log('Error')
        return res.status(404).json({message: 'Unable to delete load'});
    }
    
}
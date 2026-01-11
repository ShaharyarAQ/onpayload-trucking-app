const db = require("../models");
const IftaSettingsModel = db.iftaSettings;

exports.getIftaSettings = async (req, res) => {
    try {
        const iftaSettings = await IftaSettingsModel.findOne({ where: { id: 1 } });
        return res.status(200).json(iftaSettings);
    } catch (error) {
        return res.status(404).json({ message: 'Unable to get ifta settings' });
    }
}

exports.editIftaSettings = async (req, res) => {
    console.log(req.body);
    try {
        const response = await IftaSettingsModel.update(req.body, { where: { id: 1 } });
        return res.status(200).json(response);
    }
    catch (error) {
        console.log('Error')
        return res.status(404).json({ message: 'Unable to edit ifta settings' });
    }
}

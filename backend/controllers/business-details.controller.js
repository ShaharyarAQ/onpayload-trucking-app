const db = require("../models");
const BusinessDetailsModel = db.businessDetails;

exports.getBusinessDetails = async (req, res) => {
    try {
        const businessDetails = await BusinessDetailsModel.findOne({ where: { id: 1 } });
        return res.status(200).json(businessDetails);
    } catch (error) {
        return res.status(404).json({ message: 'Unable to get business details' });
    }

}

exports.editBusinessDetails = async (req, res) => {
    try {
        const response = await BusinessDetailsModel.update(req.body, { where: { id: 1 } });
        return res.status(200).json(response);
    }
    catch (error) {
        console.log('Error')
        return res.status(404).json({ message: 'Unable to edit business details' });
    }
}

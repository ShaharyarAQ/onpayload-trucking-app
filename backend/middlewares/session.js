const db = require('../models');
const SessionModel = db.session;


exports.validateSession = async (req, res, next) => {
    // TODO: Add token validations
    if (!req.headers.token) {
        return res.status(401).json("Unauthorized Access");
    }
    const session = await SessionModel.findOne({ where: { token: req.headers.token } });
    if (!session) {
        return res.status(401).json("Unauthorized Access");
    }
    console.log('Authorized');
    next();
};
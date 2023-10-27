const models = require('../models');

exports.getUsers = async (req, res) => {
    const data = await models['User'].findAll();
    console.log(data);
}
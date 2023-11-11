const db = require("../models");
const IncomeModel = db.income;



exports.getIncomes = async (req, res) => {
    const incomes = await IncomeModel.findAll();
    try{
        return res.status(200).json(incomes);
    }
    catch (error) {
        return res.status(404).json({message: 'Unable to get incomes data'});
    }
}

exports.getIncomeInfo = async (req, res) => {
    const incomeID = req.query.param;
    try {
        const incomeInfo = await IncomeModel.findOne({ where: { id: incomeID } });
        incomeInfo.dataValues.date = incomeInfo.dataValues.date.toISOString().split('T')[0];
        return res.status(200).json(incomeInfo);
    } catch (error) {
        return res.status(404).json({message: 'Unable to get income information'});
    }
}

exports.updateIncome = async (req, res) => {
    try {
        const response = await IncomeModel.update(req.body, { where: { id: req.query.param } });
        return res.status(200).json(response);
    }
    catch (error) {
        console.log('Error')
        return res.status(404).json({ message: 'Unable to update income' });
    }
}


exports.addIncome = async (req, res) => {
    try {
        await IncomeModel.create({ ...req.body });
        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}


exports.deleteIncome = async (req, res) => {
    const incomeId = req.query.param;
    try {
        const response = await IncomeModel.destroy({ where: { id: incomeId } });
        return res.status(200).json(response);
    } catch (error) {
        console.log('Error')
        return res.status(404).json({message: 'Unable to delete income'});
    }
    
}
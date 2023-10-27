const db = require("../models");
const ExpenseModel = db.expense;



exports.getExpenses = async (req, res) => {
    const expenses = await ExpenseModel.findAll();
    try{
        return res.status(200).json(expenses);
    }
    catch (error) {
        return res.status(404).json({message: 'Unable to get expenses data'});
    }
}

exports.getExpenseInfo = async (req, res) => {
    const expenseID = req.query.param;
    try {
        const expenseInfo = await ExpenseModel.findOne({ where: { id: expenseID } });
        return res.status(200).json(expenseInfo);
    } catch (error) {
        return res.status(404).json({message: 'Unable to get expense information'});
    }

}
exports.addExpense = async (req, res) => {
    try {
        await ExpenseModel.create({ ...req.body });
        return res.status(200).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}

exports.deleteExpense = async (req, res) => {
    const expenseID = req.query.param;
    try {
        const response = await ExpenseModel.destroy({ where: { id: expenseID } });
        return res.status(200).json(response);
    } catch (error) {
        console.log('Error')
        return res.status(404).json({message: 'Unable to delete expense'});
    }
    
}
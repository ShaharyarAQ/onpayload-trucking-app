const db = require("../models");
const MemberModel = db.member;


exports.getMembers = async (req, res) => {
    const members = await MemberModel.findAll();
    try{
        return res.status(200).json(members);
    }
    catch (error) {
        return res.status(404).json({message: 'Unable to get members data'});
    }
}

exports.getMemberInfo = async (req, res) => {
    const memberID = req.query.param;
    try {
        const memberInfo = await MemberModel.findOne({ where: { id: memberID } });
        return res.status(200).json(memberInfo);
    } catch (error) {
        return res.status(404).json({message: 'Unable to get member information'});
    }

}

exports.addMember = async (req, res) => {
    try {
        await MemberModel.create({ ...req.body });
        return res.status(201).json({ message: 'done' });
    } catch (error) {
        return res.status(500).json({ message: 'error', data: error.message });
    }
}

exports.deleteMember = async (req, res) => {
    console.log('In Delete controller', req.query.param);
    const memberID = req.query.param;
    try {
        const response = await MemberModel.destroy({ where: { id: memberID } });
        return res.status(200).json(response);
    } catch (error) {
        console.log('Error')
        return res.status(404).json({message: 'Unable to delete member'});
    }
    
}
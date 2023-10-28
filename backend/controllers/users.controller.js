// import { comparePassword } from '../services/crypto';
const db = require('../models');

const cryptoo = require('../services/crypto');
const UserModel = db.user;
const SessionModel = db.session;

exports.getUsers = async (req, res) => {
    const data = await models['User'].findAll();
    console.log(data);
}

exports.login = async (req, res) => {
    const email = req.body.emailAddress;
    const password = req.body.password;
    const loadedUser = await UserModel.findOne({ where: { emailAddress: email } });
    if (!loadedUser) {
        console.log('User does not exist');
        const error = new Error('A user with this email could not be found');
        error.statusCode = 401;
        throw error;
    }
    const check = await cryptoo.comparePassword(password, loadedUser.password);
    if (!check) {
        console.log('Wrong password');
        const error = new Error('Wrong password');
        error.statusCode = 401;
        throw error;
    }
    console.log('details are correct');
}

// exports.loginUser = async (req, res, next) => {
//     console.log(req.body);
//     const email = req.body.email;
//     const password = req.body.password;
//     let loadedUser;
//     User.findOne({ email })
//         .then(user => {
//             if (!user) {
//                 console.log('User does not exist');
//                 const error = new Error('A user with this email could not be found');
//                 error.statusCode = 401;
//                 throw error;
//             }
//             loadedUser = user;
//             return bcrypt.compare(password, user.password);
//         })
//         .then(isEqual => {
//             if (!isEqual) {
//                 console.log('Wrong password');
//                 const error = new Error('Wrong Password');
//                 error.statusCode = 401;
//                 throw error;
//             }
//             const token = jwt.sign({
//                 email: loadedUser.email,
//                 userID: loadedUser._id
//             }, 'secretprivatekey',
//                 { expiresIn: '1h' }
//             );

//             const session = new Session({
//                 token,
//                 userId: loadedUser._id,
//             })
//             session.save();

//             res.status(200).json({
//                 token: token,
//                 userId: loadedUser._id,
//                 username: loadedUser.username,
//                 email: loadedUser.email,
//                 isAdmin: loadedUser.isAdmin
//             })
//         })
//         .catch(err => {
//             res.status(200).json({ message: 'Wrong Credentials' })
//         });
// };